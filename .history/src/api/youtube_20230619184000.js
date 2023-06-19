export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    // static으로 메서드들을 정의하지 않으면 인스턴스 생성해야 가져다 사용할 수 있다.
    return keyword ? this.#searchByKeyword(keyword) : this.#listByTrendVideo();
  }

  async channelImageURL(id) {
    return this.apiClient
      .channels({
        params: { part: "snippet", id },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          relatedToVideoId: id,
        },
      })
      .then((res) => res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
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
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}
