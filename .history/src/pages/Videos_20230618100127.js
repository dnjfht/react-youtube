import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
// import { search } from "../api/youtube";
import FakeYoutube from "../api/fakeYoutube";
import { useContext } from "react";
import { DarkModeContext } from "../provider/DarkModeContext";
import Youtube from "../api/youtube";
import { useYoutubeApi } from "../provider/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();

  const { darkMode } = useContext(DarkModeContext);
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
    // } = useQuery(["videos", keyword], () => search(keyword));
  } = useQuery(["videos", keyword], () => youtube.search(keyword));

  // const {
  //   isLoading,
  //   error,
  //   data: videos,
  //   // } = useQuery(["videos", keyword], () => search(keyword)); (가장 이전 코드)
  // } = useQuery(["videos", keyword], () => {
  //   const youtube = new FakeYoutube();
  //   return youtube.search(keyword);
  //   // 사용하는 곳(네트워크 통신 등)마다 이렇게 class 인스턴스를 만들어서 일일이 호출하는 것은
  //   // 내부 로직이 노출되어 있을 뿐만 아니라, 계속 호출할 때마다 새로운 인스턴스를 만들어줘야 한다.
  //   // => 성능에 좋지 않을 것 같음

  //   // => Context를 사용해서 yuotube API를 담당하는 우산을 하나 만들어 줄 거고
  //   // 그 우산에서 딱 하나의 인스턴스를 가지고 있을 수 있도록 만들어 볼 것이다.

  // });

  const navigate = useNavigate();

  return (
    <div
      className={`${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-white text-[#0f0f0f]"
      } w-full h-[calc(100vh-60px)] overflow-y-scroll `}
    >
      <div className="lg:w-4/6 md:w-5/6 sm:w-[96%] w-[96%] mx-auto py-10">
        {isLoading && <p>Loading...</p>}
        {error && <p>Something is wrong...😔</p>}
        Videos {keyword ? `🔍${keyword}` : "🔥"}
        {videos && (
          <ul className="flex flex-wrap justify-between w-full">
            {videos.map((video) => (
              <VideoCard
                onClick={() => {
                  navigate(`/videos/watch/:${video.id}`);
                }}
                key={video.id}
                video={video}
                id={video.id}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
