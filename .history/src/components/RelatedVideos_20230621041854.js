import React from "react";
import { useYoutubeApi } from "../provider/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: videos,
  } = useQuery(["related", id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  });
  // 연관된 이미지가 빈번히 바뀌는 것이 아니기 때문에);

  const related = true;
  return (
    <div className="w-full">
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...😔</p>}

      {videos && (
        <ul className="w-full">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} related={related} />
          ))}
        </ul>
      )}
    </div>
  );
}
