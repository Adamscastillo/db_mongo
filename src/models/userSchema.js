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
