const cardsRouter = require('express').Router();
const controllers = require('./controllers/controllers');

cardsRouter.post('/card', (req, res) => controllers.cards.addCard(req, res));

module.exports = cardsRouter;