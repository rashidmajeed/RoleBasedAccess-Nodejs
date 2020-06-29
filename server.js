const express = require('express')
const app = express()
const { ROLE, users } = require('./data')
const { authUser, authRole } = require('./Auth')
const bookRouter = require('./routes/books')

app.use(express.json())
app.use(setUser)
app.use('/books', bookRouter)

app.get('/', (req, res) => {
  res.send('Welcome to Book Store..')
})

app.get('/dashboard', authUser, (req, res) => {
  res.send('My Dashboard Page')
})

app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
  res.send('Admin Panel')
})

function setUser(req, res, next) {
  const userId = req.body.userId
  if (userId) {
    req.user = users.find(user => user.id === userId)
  }
  next()
}

app.listen(3000)