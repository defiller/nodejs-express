import express from 'express'
import {
  configure
} from 'nunjucks'
import {
  json,
  urlencoded
} from 'body-parser'
const app = express()

let port

const {
  NODE_ENV
} = process.env

if (NODE_ENV === 'development') port = process.env.DEV_PORT
else port = process.env.PORT

configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(json())
app.use(urlencoded({
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

app.listen(port, () => console.log(`server started on url http://localhost:${port}`))
