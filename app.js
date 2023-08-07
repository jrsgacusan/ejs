const express = require('express')

const app = express()

// Set EJS as templating engine
app.set('view engine', 'ejs')

app.use(require('express-ejs-layouts'))

app.set('layout', './layouts/master')

// Products page
app.get('/products', (req, res) => {
  const viewsData = {
    items: items,
  }
  res.render('pages/products', viewsData)
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})

const browserSync = require('browser-sync').create()
const bsConfig = require('./bs-config.js')
const { items } = require('./constants/items.js')
browserSync.init(bsConfig)
app.use(require('connect-browser-sync')(browserSync))

app.use(express.static('public'))
