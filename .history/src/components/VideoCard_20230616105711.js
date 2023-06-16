import React from "react";

export default function VideoCard({ video }) {
  return (
    <li>
      {video.snippet.thumbnails.default.url}
      {video.snippet.title}
    </li>
  );
}
