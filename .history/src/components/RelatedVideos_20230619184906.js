import React from "react";
import { useYoutubeApi } from "../provider/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: videos,
  } = useQuery(["search", id], () => youtube.search(id));
  return <div>{id}</div>;
}
