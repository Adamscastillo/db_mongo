const UserSchema = require("./schemas/userSchema")

class UserModel{
    async findAll(){
        return await UserSchema.find({});
    }

    async find(id){
        return await UserSchema.findOne({_id:id})
    }

    async create(user){
        const schema = new UserSchema(user)
        return await schema.save();
    }

    async remove(id){
        await UserSchema.deleteOne({_id:id})
    }

    async update(id, properties){
        await UserSchema.updateOne({_id:id}, properties)
        return await UserSchema.findOne({_id:id})
    }
}

module.exports = UserModel