const express = require('express')
const app = express()
const connection = require('./database/database')

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
  res.render('index')
})

connection
  .authenticate()
  .then(() => {
    console.log('Conexão com sucesso.')
  })
  .catch((error) => {
    console.log(error)
  })

app.listen(8080, (req, res) => {
  console.log('Server running')
})
