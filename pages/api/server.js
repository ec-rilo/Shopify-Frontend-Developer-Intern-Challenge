import axios from 'axios';

const server = {

  addUser: (user) => {
    axios.post('users/user', {
      email: user.email,
      name: user.name,
      photoURL: user.photoURL
    })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  },

  addCard: (card) => new Promise ((resolve, reject) => {
    axios.post('cards/card', {
      id: card.id,
      user_email: card.user_email,
      prompt: card.prompt,
      ai_response: card.ai_response,
      time_stamp: card.time_stamp,
      engine_model: card.engine_model,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  }),

  getCards: (filter) => new Promise ((resolve, reject) => {
    let query = query = 'cards/all_filtered_cards';
    let paramsObj = {};

    if (filter !== 'most recent') {
      query = 'cards/all_filtered_cards_engine';
      paramsObj = {
        params: {
          engineName: filter
        }
      }
    }

    axios.get(query, paramsObj)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error);
      });
  })

}

export default server;
