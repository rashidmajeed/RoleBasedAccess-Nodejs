const express = require('express')
const router = express.Router()
const { books } = require('../data')
const { authUser } = require('../Auth')
const { canAccessBook, canDeleteBook, scopedBooks } = require('../permissions/book')

router.get('/', authUser, (req, res) => {
  res.json(scopedBooks(req.user, books))
})

router.get('/:bookId', setBook, authUser, authGetBook, (req, res) => {
  res.json(req.book)
})

router.delete('/:bookId', setBook, authUser, authDeleteBook, (req, res) => {
  res.send('Deleted Project')
})

function setBook(req, res, next) {
  const bookId = parseInt(req.params.bookId)
  req.book = books.find(book => book.id === bookId)
  
  if (req.book == null) {
    res.status(404)
    return res.send('Book not found')
  }
  next()
}

function authGetBook(req, res, next) {
  if (!canAccessBook(req.user, req.book)) {
    res.status(401)
    return res.send('Not Allowed')
  }

  next()
}

function authDeleteBook(req, res, next) {
  if (!canDeleteBook(req.user, req.book)) {
    res.status(401)
    return res.send('Not Allowed')
  }

  next()
}

module.exports = router