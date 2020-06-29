const { ROLE } = require('../data')

function canAccessBook(user, book) {
  return (
    user.role === ROLE.ADMIN ||
    book.userId === user.id
  )
}

function scopedBooks(user, books) {
  if (user.role === ROLE.ADMIN) return books
  return books.filter(book => book.userId === user.id)
}

function canDeleteBook(user, book) {
  return book.userId === user.id
}

module.exports = {
  canAccessBook,
  scopedBooks,
  canDeleteBook
}