import React from "react";

const truncate = (str, n) => {
  return str.length > n ? str.substring(0, n - 1) + "..." : str;
};

export default function VideoCard({ video }) {
  return (
    <li className="2xl:w-[19.6%] xl:w-[24.4%] text-[0.9rem]">
      <img
        className="w-full object-cover"
        src={video.snippet.thumbnails.medium.url}
      />
      <p className="mt-1">{truncate(video.snippet.title, 54)}</p>
      <p className="text-[#bdbdbd] mt-2">
        {truncate(video.snippet.channelTitle, 26)}
      </p>
      <p className="text-[#bdbdbd] mb-4">{`${Math.ceil(
        (new Date().getTime() - new Date(video.snippet.publishedAt).getTime()) /
          (1000 * 60 * 60)
      )}시간 전`}</p>
    </li>
  );
}
