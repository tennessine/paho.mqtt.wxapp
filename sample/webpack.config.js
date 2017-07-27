const { join } = require('path')

module.exports = {
  entry: {
    app: join(__dirname, 'src/app.js')
  },
  output: {
    path: __dirname,
    filename: '[name].js'
  }
}