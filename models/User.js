const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,

    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    password: {
        type: String,

    }
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)