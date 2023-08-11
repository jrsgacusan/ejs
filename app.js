const express = require('express')

const app = express()
const fs = require('fs')
const path = require('path')

function getImagesData(directory) {
  return new Promise((resolve, reject) => {
    fs.readdir(directory, (err, files) => {
      if (err) return reject(err)

      const imageFiles = files.filter((file) =>
        ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff'].includes(
          path.extname(file).toLowerCase(),
        ),
      )

      const imageData = imageFiles.map((file) => ({
        imageRef: path.join(directory, file),
        title: 'title',
        colors: '8 colors',
        price: '$200',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      }))

      resolve(imageData)
    })
  })
}

// Set EJS as templating engine
app.set('view engine', 'ejs')

app.use(require('express-ejs-layouts'))

app.set('layout', './layouts/master')

// Products page
app.get('/products', async (req, res) => {
  const viewsData = {
    items: items,
    sizes: sizes,
  }
  res.render('pages/products', viewsData)
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})

const browserSync = require('browser-sync').create()
const bsConfig = require('./bs-config.js')
const { items } = require('./constants/items.js')
const { sizes } = require('./constants/sizes.js')
browserSync.init(bsConfig)
app.use(require('connect-browser-sync')(browserSync))

app.use(express.static('public'))
