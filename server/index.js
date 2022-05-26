
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const app = express();

  // models
  const models = require('./models/models');

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
      origin: "http://localhost:8080",
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', (socket) => {
    socket.on('cardPosted', (response) => {

      const getCardsDescOrder = () => {
        models.cards.getAllFiltered()
          .then((response) => {
            io.sockets.emit('allCardsDesc', response);
          })
          .catch(() => {
            console.error('failed to get all filtered cards');
          });
      }

      const getCardsEngineOrder = (engineName) => {
        models.cards.getAllFilteredEngine(engineName)
          .then((response) => {
            io.sockets.emit('allCardsDesc', response);
          })
          .catch(() => {
            console.error('failed to get all filtered cards');
          });
      }

      switch(response) {
        case 'most recent':
          getCardsDescOrder();
          break;
        case 'text-curie-001':
          getCardsEngineOrder('text-curie-001');
          break;
        case 'text-davinci-002':
          getCardsEngineOrder('text-davinci-002');
          break;
        case 'text-babbage-001':
          getCardsEngineOrder('text-babbage-001');
          break;
        case 'text-ada-001':
          getCardsEngineOrder('text-ada-001');
          break;
        default:
          break;
      }
    });

    socket.on('disconnect', () => {
      console.log('disconnected');
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
