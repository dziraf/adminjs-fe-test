const express = require('express')

const start = () => {
  const app = express()
  app.use(express.static('public'))
  app.listen(8080, () => {
    console.log('app started')
  })
}

start()