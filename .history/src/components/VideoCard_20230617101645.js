import React from "react";

const truncate = (str, n) => {
  return str.length > n ? str.substring(0, n - 1) + "..." : str;
};

const timesAgo = (day) => {
  // timeago.js라는 라이브러리를 사용해도 된다.

  const givenDate = new Date(day);
  const currentDate = new Date();

  const times = Math.ceil(
    (currentDate.getTime() - givenDate.getTime()) / (1000 * 60 * 60)
  );

  // 주어진 날짜와 현재 날짜 사이의 일 수 계산
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const days = Math.round(
    (currentDate.getTime() - givenDate.getTime()) / millisecondsPerDay
  );

  const months =
    // 주어진 날짜와 현재 날짜 사이의 월 수 계산
    (currentDate.getFullYear() - givenDate.getFullYear()) * 12 +
    (currentDate.getMonth() - givenDate.getMonth());

  const years =
    // 주어진 날짜와 현재 날짜 사이의 연도 차이 계산
    currentDate.getFullYear() - givenDate.getFullYear();

  return years > 0
    ? years + "년 전"
    : months > 0
    ? months + "달 전"
    : days > 0
    ? days + "일 전"
    : times + "시간 전";
};

// const monthsAgo = (day) => {
//   // 주어진 날짜
//   const givenDate = new Date(day);

//   // 현재 날짜
//   const currentDate = new Date();

//   return (
//     (currentDate.getFullYear() - givenDate.getFullYear()) * 12 +
//     (currentDate.getMonth() - givenDate.getMonth())
//   );
// };

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
        {timesAgo(video.snippet.publishedAt)}
      </p>
    </li>
  );
}
