const express = require("express")
const dotenv = require("dotenv").config()
const database = require("../database.js")

let router = express.Router()

router.post("/post",(req,res) => {
  let tanggal = req.body.tanggal
  let bimbingan = req.body.bimbingan
  
  const data = new database({
    tanggal:tanggal,
    bimbingan:bimbingan
  })
  data.save()
  .then(response => {
    res.status(200).json({status:200,message:"Data berhasil diinput"})
  })
  .catch(err => {
    res.status(404).json({status:200,message:"Data gagal diinput"})
  })
})

module.exports = router