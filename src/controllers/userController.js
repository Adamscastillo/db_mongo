const UserSchema = require('../models/userSchema')
const { Types } = require("mongoose")
const bcrypt = require('bcrypt')
module.exports = {
  getAll: async (req, res) => {
    UserSchema.find(function (err, users) {
      if (err) {
        res.status(500).send({ message: err.message })
      }
      res.status(200).send(users)
    })
  },

  create: async (req, res) => {
    const hashedPassword = bcrypt.hashSync(
      req.body.password,
      bcrypt.genSaltSync(10)
    )
    req.body.password = hashedPassword

    try {
      const newUser = new UserSchema(req.body)

      const savedUser = await newUser.save()
      savedUser.password = undefined

      res.status(201).json({
        message: 'User adicionado com sucesso!',
        savedUser
      })
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  },

  delete: async (req, res) => {
    const { params: { id } } = req;

    try {
      await UserSchema.deleteOne({ _id: id })
      return res.status(204).json();

    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  },

  update: async (req, res) => {
    const { params: { id }, body } = req;

    try {
      await UserSchema.updateOne({ _id: id }, body)
      const userUpdated = await UserSchema.findById(id)
      userUpdated.password = undefined;

      return res.status(200).json(userUpdated);

    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  }


}
