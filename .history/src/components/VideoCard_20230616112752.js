import React from "react";

export default function VideoCard({ video }) {
  return (
    <li className="w-[19.6%] ">
      <img
        className="w-full object-cover"
        src={video.snippet.thumbnails.default.url}
      />
      <p>{video.snippet.title}</p>
      <p>{video.snippet.channelTitle}</p>
      {`${Math.ceil(
        (new Date().getTime() - new Date(video.snippet.publishedAt).getTime()) /
          (1000 * 60 * 60)
      )}시간 전`}
    </li>
  );
}
