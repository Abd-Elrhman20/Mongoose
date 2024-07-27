import { Router } from 'express';
import { addBook, deleteBook, editBook, getAllBooks, getBookById } from './book.controllers.js';

const bookRouter = Router();

bookRouter.route('/').get(getAllBooks).post(addBook)
bookRouter.route('/:bookId').get(getBookById).patch(editBook).delete(deleteBook)

export default bookRouter;