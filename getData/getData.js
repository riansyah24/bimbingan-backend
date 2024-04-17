const express = require("express")
const dotenv = require("dotenv").config()
const database = require("../database.js")

let router = express.Router()

router.get("/",(req,res) => {
  database.find()
  .then(response => res.status(200).json({status:200,data:response,message:"Data berhasil didapat"}))
  .catch(err => res.status(404).json({status:200,message:`Data berhasil didapat ${err}`}))
})

module.exports = router