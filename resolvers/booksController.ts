import mongoose from 'mongoose';
 
import Author from '../models/author';
import Book from '../models/books';
 
export function getBookById(root:any , {id}: any) {
    return Book.findById(new mongoose.Types.ObjectId(id)).populate('author');
}
 
export function getAllBooks() {
    return Book.find().populate('author').exec();
}
 
export async function addBook(root: any, {authorId, input}: any) {
    const authorObjectId = new mongoose.Types.ObjectId(authorId);
    const author: any = await Author.findById(authorObjectId);
 
    if (!author) {
        throw new Error('Author is not exists');
    }
 
    input.author = authorObjectId;
    const book = await new Book(input).save();
 
    author.books.push(book);
    await author.save();
 
    return getBookById(null, book);
}