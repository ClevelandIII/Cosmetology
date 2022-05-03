const express = require("express");
const app = express();
const cors = require('cors')
const dotenv = require("dotenv")
dotenv.config()
const {MongoClient} = require("mongodb")
const client = new MongoClient(process.env.MONGO_URI)
client.connect().then(() => console.log('Connect to db'))

app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.get("/", async(req, res) => {
let result = await client.db("cosmetology").collection("clients").findOne({firstName: ""})
})

app.listen(4000, console.log("Listening on 4000"))