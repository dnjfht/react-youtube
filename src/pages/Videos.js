import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { search } from "../api/youtube";

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => search(keyword));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something is wrong...😔</p>;
  return (
    <div className="w-[100%] h-[calc(100vh-60px)] bg-[#0f0f0f] overflow-y-scroll text-white">
      <div className="w-[81.25rem] mx-auto p-10">
        Videos {keyword ? `🔍${keyword}` : "🔥"}
        {videos && (
          <ul>
            {videos.map((video, i) => (
              <VideoCard key={i} video={video} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
