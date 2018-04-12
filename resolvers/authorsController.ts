import mongoose from 'mongoose';
import Author from '../models/author';
 
export function getAuthorById(root:any, {id}: any) {
    return Author.findById(new mongoose.Types.ObjectId(id)).populate('books');
}
 
export function getAllAuthors() {
    return Author.find().populate('books').exec();
}
 
export function addAuthor(root:any, {input}: any) {
    let author = new Author(input);
    return author.save();
}