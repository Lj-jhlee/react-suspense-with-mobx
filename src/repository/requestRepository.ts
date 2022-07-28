import axios from "axios";
import BaseRepository from ".";

class requestRepository extends BaseRepository {
  url = `${this.host}`;

  async getUser(userId: number) {
    return axios.get(`${this.url}/users/${userId}`);
  }

  async getPosts(userId: number) {
    return axios.get(`${this.url}/posts`, {
      params: {
        userId,
      },
    });
  }
}

export default new requestRepository();
