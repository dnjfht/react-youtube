import React from "react";

export default function VideoCard({ video }) {
  return (
    <li className="w-[1%9 ">
      <img
        className="w-full object-cover"
        src={video.snippet.thumbnails.default.url}
      />
      {video.snippet.title}
      {video.snippet.channelTitle}
      {`${Math.ceil(
        (new Date().getTime() - new Date(video.snippet.publishedAt).getTime()) /
          (1000 * 60 * 60)
      )}시간 전`}
    </li>
  );
}
