const path = require('path')
const express = require('express')

const start = () => {
  const app = express()
  app.use(express.static('public'))
  app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'public/index.html')))
  app.listen(8080, () => {
    console.log('app started')
  })
}

start()
