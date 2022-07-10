const mongoose = require('mongoose')
const messages = {
  0: 'Connected',
  1: 'Offline',
  2: 'Unexpected Error'
}

module.exports = {
  connect() {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then((v) => {
      console.table({
        "Database": { MongoDB: messages[0] }
      })
    }).catch((e) => {
      console.table({
        "Database": { MongoDB: messages[1], Message: e.message }
      })
    });
  }
}