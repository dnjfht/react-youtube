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

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#listByTrendVideo();
  }
  // class member 함수이므로 function이라는 keyword를 적지 않아도 된다.
  // 함수 앞에 #을 붙이면 private 함수이다.
  // => class 내부적으로는 호출이 가능하나, class 외부에서는 호출할 수 없다.

  async #searchByKeyword() {
    return axios
      .get(`/data/ListByKeyword.json`) //
      .then((res) => res.data.items) //
      .then((items) =>
        items.map((item) => {
          return { ...item, id: item.id.videoId };
          // item을 하나씩 순회하면서 id가 있다면 id만 videoId에 있는 문자열로 덮어씌워주기
          // ListByTrendVideo와 id 형식을 맞춰주기 위해서 이다.
          // => 둘 중 무엇이든 상관하지 않고 동일한 UI를 보여주기 위해서.(데이터가 다른 것을 인식X)

          // 그리고 이미 지정된 keyword로 검색을 하기 때문에 사실상 keyword도 인자로 받을 필요가 없음.
          // 모든게 aespa로...ㅎ
        })
      );
  }

  async #listByTrendVideo() {
    return axios
      .get(`/data/ListByTrendVideo.json`) //
      .then((res) => res.data.items);
  }
}
