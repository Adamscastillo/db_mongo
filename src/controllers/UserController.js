const UserModel = require('../models/UserModel')
const bcrypt = require('bcrypt')

class UserController {

  async getAll(req, res){
    const model = new UserModel();
    const users = await model.findAll();

    if(users instanceof Error){
      return res.status(500).send({ message: users.message})
    }
    return res.status(200).json(users);

  }

  async create(req, res){
    const hashedPassword = bcrypt.hashSync(
      req.body.password,
      bcrypt.genSaltSync(10)
    )
    req.body.password = hashedPassword

    try {
      const model = new UserModel()

      const savedUser = await model.create(req.body)
      savedUser.password = undefined

      return res.status(201).json(savedUser);
    
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  }

  async delete(req, res){
    const { params: { id } } = req;

    try {
      const model = new UserModel();
      await model.remove(id);

      return res.status(204).json();

    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  }

  async update(req, res){
    const { params: { id }, body } = req;

    try {
      const model = new UserModel();
      const userUpdated = await model.update(id, body)
      userUpdated.password = undefined;

      return res.status(200).json(userUpdated);

    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  }
  
}

module.exports = UserController