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
  }
}

export default server;
