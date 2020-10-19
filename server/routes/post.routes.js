const express = require('express')

const PostAPI = express()
const PostModel = require('../models/post')

// Post CRUD
// Create
PostAPI.post('/create', async (req, res) => {
  const Post = new PostModel(req.body)

  try {
    await Post.save()
    res.status(200).send(`Post creado correctamente: ${Post}`)
  } catch (err) {
    res.status(500).send(err)
  }
})

// Read
// All
PostAPI.get('/get/all', async (req, res) => {
  const Posts = await PostModel.find()

  try {
    res.status(200).send(Posts)
  } catch (err) {
    res.status(500).send(err)
  }
})

// By ID
PostAPI.get('/get/:id', async (req, res) => {
  const Post = await PostModel.findById(req.params.id)

  try {
    !Post ? res.status(404).send('Not found') : res.status(200).send(Post._id)
  } catch (err) {
    res.status(500).send(err)
  }
})

// Update
PostAPI.patch('/update/:id', async (req, res) => {
  try {
    const Post = await PostModel.findByIdAndUpdate(req.params.id, req.body)

    Post.save()
    res.status(200).send(Post)
  } catch (err) {
    res.status(500).send(err)
  }
})

// Delete
PostAPI.delete('/delete/:id', async (req, res) => {
  try {
    const Post = await PostModel.findByIdAndDelete(req.params.id)

    !Post ? res.status(404).send('Not found') : res.status(200).send(Post._id)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = PostAPI
