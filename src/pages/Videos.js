import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
// import { search } from "../api/youtube";
import FakeYoutube from "../api/fakeYoutube";
import { useContext } from "react";
import { DarkModeContext } from "../provider/DarkModeContext";

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
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something is wrong...😔</p>;
  return (
    <div
      className={`${
        darkMode ? "bg-[#0f0f0f] text-white" : "bg-white text-[#0f0f0f]"
      } w-[100%] h-[calc(100vh-60px)] overflow-y-scroll `}
    >
      <div className="w-[81.25rem] mx-auto p-10">
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
