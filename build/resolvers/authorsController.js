"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var author_1 = __importDefault(require("../models/author"));
function getAuthorById(root, _a) {
    var id = _a.id;
    return author_1.default.findById(new mongoose_1.default.Types.ObjectId(id)).populate('books');
}
exports.getAuthorById = getAuthorById;
function getAllAuthors() {
    return author_1.default.find().populate('books').exec();
}
exports.getAllAuthors = getAllAuthors;
function addAuthor(root, _a) {
    var input = _a.input;
    var author = new author_1.default(input);
    return author.save();
}
exports.addAuthor = addAuthor;
