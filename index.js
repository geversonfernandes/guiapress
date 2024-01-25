const express = require('express')
const app = express()
const connection = require('./database/database')
const categoriesController = require('./categories/categoriesController')
const articlesController = require('./articles/articlesController')
const Article = require('./articles/Article')
const Category = require('./categories/Category')

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', categoriesController)
app.use('/', articlesController)

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
