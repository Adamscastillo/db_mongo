const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cep: {
    type: String
  },
  cpf: {
    type: String,
    required: true
  },
  states: {
    type: String
  },
  city: {
    type: String
  },
  phone: {
    type: String
  },
  password: {
    type: String,
    required: false,
    select: false
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

module.exports = model('user', userSchema)
