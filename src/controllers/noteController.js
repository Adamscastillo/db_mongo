const NoteSchema = require('../models/noteSchema')

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
  const { title, content } = req.body;

  try {
    
    const newNote = new NoteSchema({
      title,
      content
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
