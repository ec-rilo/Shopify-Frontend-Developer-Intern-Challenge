const models = require('../models/models');

module.exports = {

  addUser: (req, res) => {
    const user = req.body;

    models.users.addUserData(user)
      .then((response) => {
        res.send('posted! ' + response);
      })
      .catch((err) => {
        res.send('error! ' + err);
      });
  }

};