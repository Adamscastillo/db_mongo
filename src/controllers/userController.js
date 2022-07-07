const UserSchema = require('../models/aw')
const bcrypt = require('bcrypt')

const getAll = async (req, res) => {
  UserSchema.find(function (err, users) {
    if (err) {
      res.status(500).send({ message: err.message })
    }
    res.status(200).send(users)
  })
}

const createUser = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  req.body.password = hashedPassword

  try {
    const newUser = new UserSchema(req.body)

    const savedUser = await newUser.save()

    res.status(201).json({
      message: 'User adicionado com sucesso!',
      savedUser
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = {
  getAll,
  createUser
}
