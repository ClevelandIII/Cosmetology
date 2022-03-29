//* EXPRESS APP SETUP */
const express = require("express");
const { connectDB } = require("./server/util/connect");
const cloudinary = require("cloudinary").v2;

require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

const app = express();
const PORT = process.env.PORT || 3001;

//* NEXT APP SETUP */
const next = require("next");
//!create a check for development vs production
const dev = process.env.NODE_ENV !== "production";

//! there are giant error warnings that pop up when in dev.
const nextApp = next({ dev });

//! this is a built in next router that will handle ALL requests made to the server
const handler = nextApp.getRequestHandler();

//* MIDDLEWARES */
app.use(express.json());

//* ROUTERS */
const profileRoutes = require("./server/routes/profileRoute");

app.use("/api/v1/profile", profileRoutes);

// const clientRoute = require("./server/routes/clientRoute");

// app.use("/api/v1/client", clientRoute)
// //*SOCKETS */

connectDB();

nextApp.prepare().then(() => {
  app.all("*", (req, res) => handler(req, res));
  app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Server listening @ port ${PORT}`);
  });
});
