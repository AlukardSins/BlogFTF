const mongoose = require('mongoose')

var PostSchema = new mongoose.Schema({
  creator: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  verified: {
    type: Boolean
  }
})

module.exports = mongoose.model('Post', PostSchema)
