import React from "react";
import { useYoutubeApi } from "../provider/YoutubeApiContext";

export default function ChannelInfo({ id, title }) {
  const { youtube } = useYoutubeApi();

  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
    </div>
  );
}
