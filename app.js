const express = require('express')
const app = express()

// Set EJS as templating engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})

const browserSync = require('browser-sync').create()
const bsConfig = require('./bs-config.js')
browserSync.init(bsConfig)
app.use(require('connect-browser-sync')(browserSync))

app.use(express.static('public'))
