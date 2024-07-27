import { authorModel } from './../../database/models/author.model.js';

export const getAllAuthors = async (req, res) => {
    await authorModel.find()
        .then((authors) => {
            res.status(200).json({ message: "All authors", data: authors })
        })
        .catch((error) => {
            res.status(500).json({ message: "Error Occurred while getting authors", error: error })
        })
}

export const createAuthor = async (req, res) => {
    await authorModel.create(req.body)
        .then((author) => {
            res.status(201).json({ message: "Author added successfully", data: author })
        })
        .catch((error) => {
            res.status(500).json({ message: "Error Occurred while create a author", error: error })
        })
}

export const getAuthorById = async (req, res) => {
    await authorModel.findOne({ _id: req.params.authorId })
        .then((author) => {
            res.status(200).json({ message: "Author found", data: author })
        })
        .catch((error) => {
            res.status(500).json({ message: "Error Occurred while getting a author", error: error })
        })
}

export const updateAuthor = async (req, res) => {
    await authorModel.updateOne({ _id: req.params.authorId }, req.body)
        .then((author) => {
            res.status(200).json({ message: "Author updated successfully", data: author })
        })
        .catch((error) => {
            res.status(500).json({ message: "Error Occurred while editing a author", error: error })
        })
}

export const deleteAuthor = async (req, res) => {
    await authorModel.deleteOne({ _id: req.params.authorId })
        .then((author) => {
            res.status(200).json({ message: "Author deleted successfully", data: author })
        })
        .catch((error) => {
            res.status(500).json({ message: "Error Occurred while deleting a author", error: error })
        })
}