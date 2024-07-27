import mongoose from 'mongoose'

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
    },
    birthDate: {
        type: Date,
    },
    books: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Book'
        }
    ]
})

export const authorModel = mongoose.model("Author", authorSchema)