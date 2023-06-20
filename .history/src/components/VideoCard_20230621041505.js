import React from "react";
import { useNavigate } from "react-router-dom";

const truncate = (str, n) => {
  return str.length > n ? str.substring(0, n - 1) + "..." : str;
};

export const timesAgo = (day) => {
  // timeago.js라는 라이브러리를 사용해도 된다.

  const givenDate = new Date(day);
  const currentDate = new Date();

  // 주어진 날짜와 현재 날짜 사이의 초 차이 계산
  const millisecondsPerSecond = 1000; // 1초는 1000밀리초입니다.
  const seconds = Math.round(
    (currentDate.getTime() - givenDate.getTime()) / millisecondsPerSecond
  );

  // 주어진 날짜와 현재 날짜 사이의 분 차이 계산
  const millisecondsPerMinute = 60 * 1000; // 1분은 60초 * 1000밀리초입니다.
  const minutes = Math.round(
    (currentDate.getTime() - givenDate.getTime()) / millisecondsPerMinute
  );

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
    : times > 0
    ? times + "시간 전"
    : minutes > 0
    ? minutes + "분 전"
    : seconds + "초 전";
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

export default function VideoCard({ video, related }) {
  const navigate = useNavigate();

  // react-router-dom에서 부가적인 요소를 전달하고 싶을 땐
  // 네트워크 통신을 해서 데이터를 가져오는 것이 아니라,
  // 이미 데이터가 이곳에 있기 때문에(video) 함께 전달해주면 된다.
  // 부가적인 객체를 전달할 때는 {state : {video: video}} 이런 식으로 전달한다.

  return (
    <li
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
      className={`${
        related
          ? "w-full flex mb-3 text-[0.76rem]"
          : "2xl:w-[19.6%] xl:w-[24.4%] lg:w-[32.6%] md:w-[49.4%] sm:w-full w-full text-[0.9rem]"
      } cursor-pointer`}
    >
      <img
        className={`${
          related ? "xl:w-1/2 sm:w-1/4 h-[94px] rounded-md" : "w-full"
        } object-cover`}
        src={video.snippet.thumbnails.medium.url}
        alt="img"
      />

      <div className={`${related ? "xl:w-1/2 sm:w-3/4 w-3/4 ml-2" : "w-full"}`}>
        <p className={`${related ? "xl:block sm:hidden hidden" : ""} mt-1`}>{`${
          related
            ? truncate(video.snippet.title, 28)
            : truncate(video.snippet.title, 54)
        }`}</p>
        <p
          className={`${
            related ? "block xl:hidden sm:block" : "hidden"
          } text-[0.875rem] font-semibold`}
        >
          {video.snippet.title}
        </p>
        <p className="text-[#bdbdbd] mt-2">
          {truncate(video.snippet.channelTitle, 26)}
        </p>
        <p className={`${related ? "mb-0" : "mb-4"} text-[#bdbdbd]`}>
          {timesAgo(video.snippet.publishedAt)}
        </p>
      </div>
    </li>
  );
}
