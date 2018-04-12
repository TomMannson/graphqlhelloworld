"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var SchemaObjectId = Schema.Types.ObjectId;
var ObjectId = mongoose_1.default.Types.ObjectId;
var bookSchema = new Schema({
    _id: { type: SchemaObjectId, default: function () { return new ObjectId(); } },
    title: String,
    author: { type: SchemaObjectId, ref: 'Author' },
    shortDescription: String,
    description: String,
    pages: Number,
    isbn: String,
    releaseDate: Date
});
exports.default = mongoose_1.default.model('Book', bookSchema);
