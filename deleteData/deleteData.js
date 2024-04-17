const express = require("express")
const dotenv = require("dotenv").config()
const database = require("../database.js")

let router = express.Router()

router.delete("/delete/:tanggal",(req,res) => {
  database.deleteOne({tanggal:req.params.tanggal})
  .then(response => {
    res.status(200).json({status:200,message:`Data untuk tanggal ${req.params.tanggal} berhasil dihapus`})
  })
  .catch(err => res.status(404).json({status:200,message:`Data untuk tanggal ${req.params.tanggal} gagal dihapus`}))
})

module.exports = router