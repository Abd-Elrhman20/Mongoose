import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    },
    publishedDate: {
        type: Date,
        default: Date.now
    }
})

export const bookModel = mongoose.model("Book", bookSchema)