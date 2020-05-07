// setting parameter
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParse = require('body-parser')
const Login = require('./login.js')
const port = 3000

app.use(bodyParse.urlencoded({ extend: true }))
app.use(express.static('public'))
// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting routing
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log(req.body)
  response = Login(req.body.email, req.body.password)
  if (response == 'Password error' || response == 'Can not find this user') {
    res.render('index', { response: response })
  } else {
    res.render('login', { response: response })
  }

})


// server listening 
app.listen(port, () => {
  console.log('the server is listening')
})