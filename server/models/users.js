const { Server } = require("socket.io");
const { createAdapter } = require("@socket.io/postgres-adapter");
const { Pool } = require("pg");

const io = new Server();

const pgConfig = require('./pgConfig');
const pool = new Pool(pgConfig);


module.exports = {

  addUserData: (user) => {
    const query = `
      INSERT INTO users (email, name, photo_url) VALUES ($1, $2, $3)
        ON CONFLICT (email) DO NOTHING;
    `;

    const inputs = [user.email, user.name, user.photoURL];

    return pool.query(query, inputs)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  }

};

io.adapter(createAdapter(pool));
io.listen(process.env.IO_PORT);
