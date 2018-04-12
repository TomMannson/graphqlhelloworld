import mongoose from 'mongoose';
 
const Schema = mongoose.Schema;
const SchemaObjectId = Schema.Types.ObjectId;
const ObjectId = mongoose.Types.ObjectId;
 
const bookSchema = new Schema({
    _id: { type: SchemaObjectId, default: () => new ObjectId() },
    title: String,
    author: { type: SchemaObjectId, ref: 'Author' },
    shortDescription: String,
    description: String,
    pages: Number,
    isbn: String,
    releaseDate: Date
});
 
export default mongoose.model('Book', bookSchema);