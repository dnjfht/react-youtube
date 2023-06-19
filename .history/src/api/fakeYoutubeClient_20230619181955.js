import axios from "axios";

export default class FakeYoutubeClient {
  constructor() {}

  async search() {
    return axios.get(`/data/ListByKeyword.json`);
  }

  async videos() {
    return axios.get(`/data/ListByTrendVideo.json`);
  }

  async channels() {
    return axios.get(`/data/ChannelDetailContent.json`);
  }
}
