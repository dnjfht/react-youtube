import React from "react";
import { useYoutubeApi } from "../provider/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function ChannelInfo({ id, title }) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: url,
  } = useQuery(["channel", id], () => youtube.channelImageURL(id));

  return (
    <div className="w-full">
      {url && <img className="w-[2.5rem] h-[40px]" src={url} alt={title} />}
      <p>{title}</p>
    </div>
  );
}
