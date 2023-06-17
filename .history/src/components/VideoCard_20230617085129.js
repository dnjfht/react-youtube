import React from "react";

const truncate = (str, n) => {
  return str.length > n ? str.substring(0, n - 1) + "..." : str;
};

const timesAgo = (day) => {
  console.log(day);
  return Math.ceil(
    (new Date().getTime() - new Date(day).getTime()) / (1000 * 60 * 60)
  );
};

const monthsAgo = (day) => {
  // 주어진 날짜
  const givenDate = new Date(day);

  // 현재 날짜
  const currentDate = new Date();

  (currentDate.getFullYear() - givenDate.getFullYear()) * 12 +
    (currentDate.getMonth() - givenDate.getMonth());
};

export default function VideoCard({ video }) {
  return (
    <li className="2xl:w-[19.6%] xl:w-[24.4%] lg:w-[32.6%] md:w-[49.4%] sm:w-full w-full text-[0.9rem]">
      <img
        className="w-full object-cover"
        src={video.snippet.thumbnails.medium.url}
      />
      <p className="mt-1">{truncate(video.snippet.title, 54)}</p>
      <p className="text-[#bdbdbd] mt-2">
        {truncate(video.snippet.channelTitle, 26)}
      </p>
      <p className="text-[#bdbdbd] mb-4">
        {`${timesAgo(video.snippet.publishedAt)}시간 전`}
      </p>

      <p className="text-[#bdbdbd] mb-4">
        {`${monthsAgo(video.snippet.publishedAt)}달 전`}
      </p>
    </li>
  );
}
