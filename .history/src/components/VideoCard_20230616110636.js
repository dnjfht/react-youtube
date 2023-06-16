import React from "react";

export default function VideoCard({ video }) {
  return (
    <li>
      <img src={video.snippet.thumbnails.default.url} />
      {video.snippet.title}
      {video.snippet.channelTitle}
      {`${Math.ceil(
        new Date("2023-06-14T23:00:02Z").getTime() -
          (new Date().getTime() / 1000) * 60 * 60
      )}`}
    </li>
  );
}
