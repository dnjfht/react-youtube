import axios from "axios";

export async function search(keyword) {
  if (keyword) {
    console.log("fetching... keyword!");
  } else {
    console.log("fetching... Hot Trend!");
  }

  return axios
    .get(`/data/${keyword ? "ListByKeyword" : "ListByTrendVideo"}.json`)
    .then((res) => res.data.items);
}
