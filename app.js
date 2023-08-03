const express = require('express')
const app = express()

// Set EJS as templating engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  const viewsData = {
    items: items,
  }
  res.render('index', viewsData)
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
