const express = require('express')

const app = express()

// Set EJS as templating engine
app.set('view engine', 'ejs')

app.use(require('express-ejs-layouts'))

app.set('layout', './layouts/master')

app.get('/', (req, res) => {
  const viewsData = {
    items: items,
  }
  res.render('pages/index', viewsData)
})

app.get('/test', (req, res) => {
  res.render('pages/test')
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})

const browserSync = require('browser-sync').create()
const bsConfig = require('./bs-config.js')
const { items } = require('./constants/items.js')
const expressEjsLayouts = require('express-ejs-layouts')
browserSync.init(bsConfig)
app.use(require('connect-browser-sync')(browserSync))

app.use(express.static('public'))
