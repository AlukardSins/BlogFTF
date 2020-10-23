const express = require('express')

const CategoryAPI = express()
const CategoryModel = require('../models/category')

// Category CRUD
// Create
CategoryAPI.post('/create', async (req, res) => {
  const Category = new CategoryModel(req.body)

  try {
    await Category.save()
    res.status(200).send(`Category creado correctamente: ${Category}`)
  } catch (err) {
    res.status(500).send(err)
  }
})

// Read
// All
CategoryAPI.get('/get/all', async (req, res) => {
  const Categorys = await CategoryModel.find()

  try {
    res.status(200).send(Categorys)
  } catch (err) {
    res.status(500).send(err)
  }
})

// By ID
CategoryAPI.get('/get/:id', async (req, res) => {
  const Category = await CategoryModel.findById(req.params.id)

  try {
    !Category ? res.status(404).send('Not found') : res.status(200).send(Category._id)
  } catch (err) {
    res.status(500).send(err)
  }
})

// Update
CategoryAPI.patch('/update/:id', async (req, res) => {
  try {
    const Category = await CategoryModel.findByIdAndUpdate(req.params.id, req.body)

    Category.save()
    res.status(200).send(Category)
  } catch (err) {
    res.status(500).send(err)
  }
})

// Delete
CategoryAPI.delete('/delete/:id', async (req, res) => {
  try {
    const Category = await CategoryModel.findByIdAndDelete(req.params.id)

    !Category ? res.status(404).send('Not found') : res.status(200).send(Category._id)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = CategoryAPI
