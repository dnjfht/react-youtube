import React from "react";
import { useYoutubeApi } from "../provider/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: videos,
  } = useQuery(["related", id], () => youtube.relatedVideos(id));
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...😔</p>}

      <ul className="flex flex-wrap justify-between w-full">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </ul>
    </div>
  );
}
