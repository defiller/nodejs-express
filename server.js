const express = require('express')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.set('view engine', 'njk')

// routes
app.get('/', (req, res) => {
  res.render('index')
})
app.post('/check', (req, res) => {
  const {
    age
  } = req.body

  if (age >= 18) res.redirect(`/major/${age}`)
  else res.redirect(`/minor/${age}`)
})

app.get('/major', (req, res) => res.redirect('/'))
app.get('/minor', (req, res) => res.redirect('/'))

app.get('/major/:age', (req, res) => {
  res.render('age', {
    majority: 'maior',
    age: req.params.age
  })
})

app.get('/minor/:age', (req, res) => {
  res.render('age', {
    majority: 'menor',
    age: req.params.age
  })
})

app.listen(3000, () => console.log(`server started on url http://localhost:${3000}`))