// routes

module.exports = app => {

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
      majority: 'major',
      age: req.params.age
    })
  })

  app.get('/minor/:age', (req, res) => {
    res.render('age', {
      majority: 'minor',
      age: req.params.age
    })
  })
}
