const users = require("./userRoutes");
const notes = require("./noteRoutes");

module.exports = (application)=>{
    application.use('/notes', notes);
    application.use('/users', users);
}