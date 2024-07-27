import express from 'express'
import './database/dbConnection.js'
import bookRouter from './modules/book/book.routes.js'
import authRouter from './modules/auth/auth.routes.js'

const app = express()
const port = 3000

app.use(express.json())

app.use('/books', bookRouter)
app.use('/auth', authRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))