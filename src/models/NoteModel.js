const NoteSchema = require("./schemas/noteSchema");

class NoteModel{
    async findAll(){
        return await NoteSchema.find({});
    }

    async find(id){
        return await NoteSchema.findOne({_id:id})
    }

    async create(note){
        const schema = new NoteSchema(note)
        return await schema.save();
    }

    async remove(id){
        await NoteSchema.deleteOne({_id:id})
    }

    async update(id, properties){
        await NoteSchema.updateOne({_id:id}, properties)
        return await NoteSchema.findOne({_id:id})
    }
}

module.exports = NoteModel