import axios from "axios";

export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    // static으로 메서드들을 정의하지 않으면 인스턴스 생성해야 가져다 사용할 수 있다.
    return keyword ? this.#searchByKeyword(keyword) : this.#listByTrendVideo();
  }

  async #searchByKeyword(keyword) {
    return this.httpClient
      .get("search", {
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res.data.items) //
      .then((items) =>
        items.map((item) => {
          return { ...item, id: item.id.videoId };
        })
      );
  }

  async #listByTrendVideo() {
    return this.httpClient
      .get("videos", {
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          chart: "mostPopular",
        },
      }) //
      .then((res) => res.data.items);
  }
}
