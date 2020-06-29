const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic'
}

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: 'Rashid', role: ROLE.ADMIN },
    { id: 2, name: 'John', role: ROLE.BASIC },
    { id: 3, name: 'Karina', role: ROLE.BASIC }
  ],
  books: [
    { id: 1, name: "Rashid's Book", userId: 1 },
    { id: 2, name: "John's Book", userId: 2 },
    { id: 3, name: "Karina's Book", userId: 3 }
  ]
}