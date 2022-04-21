//* EXPRESS APP SETUP */
const express = require("express");
const { connectDB } = require("./server/util/connect");
const cloudinary = require("cloudinary").v2;
const fileUpload = require("express-fileupload");
// const http = require("http");
// const bodyParser = require("body-parser");
// const route = require("./server/routes");

require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

const app = express();
const PORT = process.env.PORT || 3001;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(route);

// app.use((req, res, next) => {
//   res.send("<h1> Page not found </h1>");
// });

//* NEXT APP SETUP */
const next = require("next");
//!create a check for development vs production
const dev = process.env.NODE_ENV !== "production";

//! there are giant error warnings that pop up when in dev.
const nextApp = next({ dev });

//! this is a built in next router that will handle ALL requests made to the server
const handler = nextApp.getRequestHandler();

//* MIDDLEWARES */
const { authMiddleware } = require("./server/middleware/auth");

app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));

//* ROUTERS */
// const profileRoutes = require("./server/routes/profileRoute");
const userRoute = require("./server/routes/userRoute");
const uploadRoute = require("./server/routes/uploadPicRoute")
const authRoute = require("./server/routes/authRoutes")
const clientRoute = require('./server/routes/clientRoute')
const profileRoute = require("./server/routes/profileRoute")

// app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/uploads", uploadRoute)
app.use('/api/v1/client', clientRoute)
app.use("/api/v1/stylists", userRoute)
app.use("/api/v1/profile", profileRoute)

//*SOCKETS */

connectDB(); 

nextApp.prepare().then(() => {
  app.all("*", (req, res) => handler(req, res));
  app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Server listening @ port ${PORT}`);
  });
});
