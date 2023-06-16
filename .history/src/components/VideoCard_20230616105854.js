import React from "react";

export default function VideoCard({ video }) {
  return (
    <li>
      <img src={video.snippet.thumbnails.default.url} />
      {video.snippet.title}
      {video.snippet.channelTitle}
    </li>
  );
}
