import React from "react";
import { useYoutubeApi } from "../provider/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function ChannelInfo({ id, title }) {
  const { youtube } = useYoutubeApi();
  const { error, isLoading, data: url } = useQuery(["channel", id], () => {});

  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
    </div>
  );
}
