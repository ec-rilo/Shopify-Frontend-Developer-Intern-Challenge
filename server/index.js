
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const app = express();

  const PORT = process.env.SERVER_PORT || 3000;

  // middleware
  app.use(express.json());

  // routers
  const usersRouter = require('./usersRouter');
  const cardsRouter = require('./cardsRouter');

  app.use('/users', usersRouter);
  app.use('/cards', cardsRouter);

  // socket.io
  const server = require('http').createServer(app);
  const io = require('socket.io')(server, {
    cors: {
      origin: `http://localhost:${PORT}`,
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', (socket) => {

    console.log('connected');

    socket.on('cardPosted', (response) => {
      io.sockets.emit('cardAddedToDB', response);
    });

    socket.on('disconnect', () => {
      console.log('disconnected');
    });
  });

  app.all('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
