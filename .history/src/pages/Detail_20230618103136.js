import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Detail() {
  const { videoId } = useParams();

  const {
    state: { video },
  } = useLocation();
  console.log(video);

  return (
    <div className="w-[100%] h-[calc(100vh-60px)] bg-[#0f0f0f] overflow-y-scroll text-white">
      <div className="w-[81.25rem] mx-auto p-10">
        <h1>{`Detail Page ${videoId}`}</h1>
        <p>{video.snippet.title}</p>
        <iframe
          id="player"
          type="texy/html"
          width="100%"
          height="640"
          src={`http://www/youtube.com/embed/${video.id}`}
        ></iframe>
      </div>
    </div>
  );
}
