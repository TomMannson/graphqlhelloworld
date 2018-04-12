import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const SchemaObjectId = Schema.Types.ObjectId;
const ObjectId = mongoose.Types.ObjectId;
 
const authorSchema = new Schema({
    _id: { type: SchemaObjectId, default: () => new ObjectId() },
    name: String,
    bio: String,
    birthday: Date,
    sex: String,
    books: [{ type: SchemaObjectId, ref: 'Book' }],
});
 
export default mongoose.model('Author', authorSchema);