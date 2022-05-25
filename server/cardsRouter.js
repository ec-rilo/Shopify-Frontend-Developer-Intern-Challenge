const cardsRouter = require('express').Router();
const controllers = require('./controllers/controllers');

cardsRouter.post('/card', (req, res) => controllers.cards.addCard(req, res));

cardsRouter.get('/all_filtered_cards', (req, res) => controllers.cards.getAllFiltered(req, res));

module.exports = cardsRouter;