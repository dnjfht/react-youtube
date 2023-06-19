import React from "react";
import { useYoutubeApi } from "../provider/YoutubeApiContext";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: url,
  } = useQuery(["search", id], () => youtube.search(id));
  return <div>{id}</div>;
}
