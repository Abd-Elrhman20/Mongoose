import { bookModel } from './../../database/models/book.model.js';

export const getAllBooks = async (req, res) => {
    await bookModel.find()
        .then((books) => {
            res.status(200).json({ message: "All books", data: books })
        })
        .catch((error) => {
            res.status(500).json({ message: "Error Occurred while getting books", error: error })
        })
}

export const addBook = async (req, res) => {
    await bookModel.create(req.body)
        .then((book) => {
            res.status(201).json({ message: "Book added successfully", data: book })
        })
        .catch((error) => {
            res.status(500).json({ message: "Error Occurred while create a book", error: error })
        })
}

export const getBookById = async (req, res) => {
    await bookModel.findOne({ _id: req.params.bookId })
        .then((book) => {
            res.status(200).json({ message: "Book found", data: book })
        })
        .catch((error) => {
            res.status(500).json({ message: "Error Occurred while getting a book", error: error })
        })
}

export const editBook = async (req, res) => {
    await bookModel.updateOne({ _id: req.params.bookId }, req.body)
        .then((book) => {
            res.status(200).json({ message: "Book updated successfully", data: book })
        })
        .catch((error) => {
            res.status(500).json({ message: "Error Occurred while editing a book", error: error })
        })
}

export const deleteBook = async (req, res) => {
    await bookModel.deleteOne({ _id: req.params.bookId })
        .then((book) => {
            res.status(200).json({ message: "Book deleted successfully", data: book })
        })
        .catch((error) => {
            res.status(500).json({ message: "Error Occurred while deleting a book", error: error })
        })
}