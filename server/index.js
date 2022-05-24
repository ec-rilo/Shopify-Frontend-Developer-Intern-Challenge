
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const app = express();

  app.all('*', (req, res) => {
    return handle(req, res)
  })

  const PORT = process.env.SERVER_PORT || 3000;

  app.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})