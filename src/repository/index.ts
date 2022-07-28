const apiHost = "https://jsonplaceholder.typicode.com";

class BaseRepository {
  host: string;

  constructor() {
    this.host = apiHost;
  }
}

export default BaseRepository;
