const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, '/public')))

var server = app.listen(PORT, function () {
  var port = server.address().port
  console.log('App is now listening at port %s', port)
})

module.exports = server
