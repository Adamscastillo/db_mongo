const NoteSchema = require('../models/noteSchema')
const mongoose = require('mongoose')

const getAll = async (req, res) => {
  try {
    const notes = await NoteSchema.find()
    res.status(200).json(notes)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

// criar método para cadastrar uma nota
const createNote = async (req, res) => {
  try {
    const newNote = new NoteSchema({
      title: req.body.title,
      content: req.body.content
    })

    const savedNote = await newNote.save()
    res.status(200).json({
      message: 'Nota adicionada com sucesso! (:',
      savedNote
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = {
  getAll,
  createNote
}
