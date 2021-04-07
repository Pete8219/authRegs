import User from './User'
import Category from './Category'
const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    categorie: {
        type: mongoose.Types.ObjectId,
        ref: Category
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: User
    }

})

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema)