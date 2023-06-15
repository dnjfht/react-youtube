import axios from "axios";

// export async function search(keyword) {
//   if (keyword) {
//     console.log("fetching... keyword!");
//   } else {
//     console.log("fetching... Hot Trend!");
//   }

//   return axios
//     .get(`/data/${keyword ? "ListByKeyword" : "ListByTrendVideo"}.json`)
//     .then((res) => res.data.items);
// }

export default class FakeYoutubeClient {
  constructor() {}

  async search() {
    return axios.get(`/data/ListByKeyword.json`);
  }

  async videos() {
    return axios.get(`/data/ListByTrendVideo.json`);
  }
}
