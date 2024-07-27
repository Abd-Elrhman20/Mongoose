import { Router } from 'express';
import { createAuthor, deleteAuthor, getAllAuthors, getAuthorById, updateAuthor } from './auth.controllers.js';

const authRouter = Router()

authRouter.route('/').get(getAllAuthors).post(createAuthor)
authRouter.route('/:authorId').get(getAuthorById).patch(updateAuthor).delete(deleteAuthor)

export default authRouter