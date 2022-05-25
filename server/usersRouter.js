const controllers = require('./controllers/controllers');
const usersRouter = require('express').Router();

usersRouter.post('/user', (req, res) => controllers.users.addUser(req, res));

module.exports = usersRouter;
