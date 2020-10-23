const mongoose = require('mongoose')

var CategorySchema = new mongoose.Schema({
  urlImg: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Category', CategorySchema)
