const NoteModel = require('../models/NoteModel')

class NoteController {
  async getAll(req, res){
    try {
      const model = new NoteModel()
      const notes = await model.findAll()

      return res.status(200).json(notes)
  
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  }

  async create(req, res){
    const { body } = req;
  
    try {
      const model = new NoteModel()
      const savedNote = await model.create(body)

      return res.status(200).json(savedNote)
  
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  }
}

module.exports = NoteController