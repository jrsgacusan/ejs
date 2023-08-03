module.exports = {
  files: ['views/**/*.ejs', 'public/**/*.{css,js}'],
  injectChanges: true,
  proxy: 'http://localhost:3000',
}
