import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
// import { search } from "../api/youtube";
import FakeYoutube from "../api/fakeYoutube";
import { useContext } from "react";
import { DarkModeContext } from "../provider/DarkModeContext";
import Youtube from "../api/youtube";

export default function Videos() {
  const { keyword } = useParams();

  const { darkMode } = useContext(DarkModeContext);

  const {
    isLoading,
    error,
    data: videos,
    // } = useQuery(["videos", keyword], () => search(keyword));
  } = useQuery(["videos", keyword], () => {
    const youtube = new FakeYoutube();
    return youtube.search(keyword);
    // 사용하는 곳(네트워크 통신 등)마다 이렇게 class 인스턴스를 만들어서 일일이 호출하는 것은
    // 내부 로직이 노출되어 있을 뿐만 아니라, 계속 호출할 때마다 새로운 인스턴스를 만들어줘야 한다.
    // => 성능에 좋지 않을 것 같음
  });

  return (
    <div
      className={`${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-white text-[#0f0f0f]"
      } w-[100%] h-[calc(100vh-60px)] overflow-y-scroll `}
    >
      <div className="w-[81.25rem] mx-auto p-10">
        {isLoading && <p>Loading...</p>}
        {error && <p>Something is wrong...😔</p>}
        Videos {keyword ? `🔍${keyword}` : "🔥"}
        {videos && (
          <ul>
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
