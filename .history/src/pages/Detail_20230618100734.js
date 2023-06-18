import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { videoId } = useParams();

  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
    // } = useQuery(["videos", keyword], () => search(keyword));
  } = useQuery(["videos", keyword], () => youtube.search(keyword));

  return (
    <div className="w-[100%] h-[calc(100vh-60px)] bg-[#0f0f0f] overflow-y-scroll text-white">
      <div className="w-[81.25rem] mx-auto p-10">
        <h1>{`Detail Page ${videoId}`}</h1>
      </div>
    </div>
  );
}
