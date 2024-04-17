const mongoose = require("mongoose")

let bimbinganSchema = new mongoose.Schema({
  tanggal:{
    type:String
  },
  bimbingan:{
    type: String
  }
})

let bimbingan = mongoose.model("bimbingan",bimbinganSchema)

module.exports = bimbingan