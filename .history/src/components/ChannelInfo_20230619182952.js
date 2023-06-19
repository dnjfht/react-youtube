import React from "react";
import { useYoutubeApi } from "../provider/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function ChannelInfo({ id, title }) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: url,
  } = useQuery(["channel", id], () => youtube.ChannelImageURL(id));

  return <div>{url && <img src={url} alt={title} />}</div>;
}
