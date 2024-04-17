const express = require("express")
const dotenv = require("dotenv").config()

let router = express.Router()

router.get("*",(req,res) => {
  res.status(404).json({status:404,message:`Data tidak ada`})
})

module.exports = router