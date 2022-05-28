const { Pool } = require('pg');

const pgConfig = require('./pgConfig');
const pool = new Pool(pgConfig);

module.exports = {

  addSingleCard: (cardData) => {
    const query = `
      INSERT INTO card_data
      (id, user_email, prompt, ai_response, time_stamp, engine_model)
      VALUES ($1, $2, $3, $4, $5, $6);
    `;

    const inputs = [
      cardData.id,
      cardData.user_email,
      cardData.prompt,
      cardData.ai_response,
      cardData.time_stamp,
      cardData.engine_model
    ];

    return pool.query(query, inputs)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  },

  getAllFiltered: () => {
    const query = `
      SELECT * FROM card_data, users ORDER BY card_data.time_stamp DESC;
    `;

    return pool.query(query)
      .then((response) => {
        return response.rows
      })
      .catch((err) => {
        return err;
      });
  },

  getAllFilteredEngine: (engineName) => {
    const query = `
      SELECT * FROM card_data, users
      WHERE card_data.engine_model = $1
      ORDER BY card_data.time_stamp DESC;
    `;

    const input = [engineName];

    return pool.query(query, input)
      .then((response) => {
        return response.rows
      })
      .catch((err) => {
        return err;
      });
  }

};

// Add a single card to the database