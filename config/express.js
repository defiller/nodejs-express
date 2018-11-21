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

app.use(express.static('public'))

app.set('view engine', 'njk')

require('../routes')(app)

app.listen(port, () => console.log(`server started on url http://localhost:${port}`))
