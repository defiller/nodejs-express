const express = require('express')
const nunjucks = require('nunjucks')
const bodyparser = require('body-parser')
const app = express()

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true
})

app.use(express.json())
app.use(bodyparser())

app.set('view engine', 'njk')

//routes
app.get("/", (req, res) => {})
app.get("/check", (req, res) => {})
app.get("/major", (req, res) => {})
app.get("/minor", (req, res) => {})

app.listen(3000, () => console.log("server started"))