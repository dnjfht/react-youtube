import React from "react";

export default function VideoCard({ video }) {
  return (
    <li className="w-[19.6%] text-[0.9rem]">
      <img
        className="w-full object-cover"
        src={video.snippet.thumbnails.default.url}
      />
      <p className="m-0">{video.snippet.title}</p>
      <p className="text-[#bdbdbd]">{video.snippet.channelTitle}</p>
      <p className="text-[#bdbdbd]">{`${Math.ceil(
        (new Date().getTime() - new Date(video.snippet.publishedAt).getTime()) /
          (1000 * 60 * 60)
      )}시간 전`}</p>
    </li>
  );
}
