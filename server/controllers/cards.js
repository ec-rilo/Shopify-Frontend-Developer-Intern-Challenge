const models = require('../models/models');

module.exports = {

  addCard: (req, res) => {
    const cardData = req.body;

    models.cards.addSingleCard(cardData)
      .then((response) => {
        res.send(response);
      })
      .catch((err) => {
        res.send(err);
      });
  },

  getAllFiltered: (req, res) => {
    models.cards.getAllFiltered()
      .then((response) => {
        res.send(response);
      })
      .catch((err) => {
        res.send(err);
      });
  },

  getAllFilteredEngine: (req, res) => {
    const engineName = req.query.engineName;

    models.cards.getAllFilteredEngine(engineName)
      .then((response) => {
        res.send(response);
      })
      .catch((err) => {
        res.send(err);
      })
  }

};