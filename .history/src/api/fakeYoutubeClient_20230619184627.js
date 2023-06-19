import axios from "axios";

export default class FakeYoutubeClient {
  constructor() {}

  async search({ params }) {
    return params.relatedToVideoId
      ? axios.get(`/data/ListByRelatedVideo.json`)
      : axios.get(`/data/ListByKeyword.json`);
    // return axios.get(`/data/${params.relatedToVideoId ? "ListByRelatedVideo" : "ListByKeyword"}.json`);
  }

  async videos() {
    return axios.get(`/data/ListByTrendVideo.json`);
  }

  async channels() {
    return axios.get(`/data/ChannelDetailContent.json`);
  }
}
