import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => {
    if (keyword) {
      console.log("fetching... keyword!");
    } else {
      console.log("fetching... Hot Trend!");
    }

    return fetch(`/data/${keyword ? "ListByKeyword" : "ListByTrendVideo"}.json`)
      .then((res) => res.json())
      .then((data) => data.items);
  });

  console.log(videos);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something is wrong...😔</p>;
  return (
    <div className="w-[100%] h-[calc(100vh-60px)] bg-[#0f0f0f] overflow-y-scroll text-white">
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
