"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var SchemaObjectId = Schema.Types.ObjectId;
var ObjectId = mongoose_1.default.Types.ObjectId;
var authorSchema = new Schema({
    _id: { type: SchemaObjectId, default: function () { return new ObjectId(); } },
    name: String,
    bio: String,
    birthday: Date,
    sex: String,
    books: [{ type: SchemaObjectId, ref: 'Book' }],
});
exports.default = mongoose_1.default.model('Author', authorSchema);
