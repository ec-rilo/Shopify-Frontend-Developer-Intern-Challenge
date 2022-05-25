
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const app = express();

  // middleware
  app.use(express.json());

  // routers
  const usersRouter = require('./usersRouter');
  const cardsRouter = require('./cardsRouter');

  app.use('/users', usersRouter);
  app.use('/cards', cardsRouter);

  // socket.io
  const server = require('http').createServer(app);
  const io = require('socket.io')(server);

  io.on('connection', (socket) => {
    socket.on('disconnect', () => {
    });
  });

  app.all('*', (req, res) => {
    return nextHandler(req, res)
  })

  const PORT = process.env.SERVER_PORT || 3000;

  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
