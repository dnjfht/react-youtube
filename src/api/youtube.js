import axios from "axios";

export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#listByTrendVideo();
  }

  async #searchByKeyword() {
    return axios
      .get(`/data/ListByKeyword.json`) //
      .then((res) => res.data.items) //
      .then((items) =>
        items.map((item) => {
          return { ...item, id: item.id.videoId };
        })
      );
  }

  async #listByTrendVideo() {
    return axios
      .get(`/data/ListByTrendVideo.json`) //
      .then((res) => res.data.items);
  }
}
