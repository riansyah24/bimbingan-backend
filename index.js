const env = require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const getData = require("./getData/getData.js")
const postData = require("./postData/postData.js")
const deleteData = require("./deleteData/deleteData.js")
const errorData = require("./errorData/errorData.js")

let app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI)
  .then(res => console.log("Database berhasil tersambung"))
  .catch(err => console.log(`Database gagal tersambung ${err}`))

app.use(getData)
app.use(postData)
app.use(deleteData)
app.use(errorData)

app.listen(process.env.PORT,() => console.log(`Server is running on port ${process.env.PORT}`))