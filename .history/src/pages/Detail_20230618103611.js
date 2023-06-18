import React from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const {
    state: { video },
  } = useLocation();
  console.log(video);

  return (
    <div className="w-[100%] h-[calc(100vh-60px)] bg-[#0f0f0f] overflow-y-scroll text-white">
      <div className="w-[81.25rem] mx-auto p-10">
        <iframe
          id="player"
          type="texy/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameborder="0"
        >
          <div>
            <h2>{video.snippet.title}</h2>
          </div>
        </iframe>
      </div>
    </div>
  );
}
