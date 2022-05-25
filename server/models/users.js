const { Server } = require("socket.io");
const { createAdapter } = require("@socket.io/postgres-adapter");
const { Pool } = require("pg");

const io = new Server();

const pool = new Pool({
  user: "postgres",
  host: 'localhost',
  database: "fun_with_gpt_3",
  password: "123456",
  port: 5432,
});


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
