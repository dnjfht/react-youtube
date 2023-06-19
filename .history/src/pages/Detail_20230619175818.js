import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";

export default function Detail() {
  const {
    state: { video },
  } = useLocation();
  console.log(video);

  return (
    <div className="w-[100%] h-[calc(100vh-60px)] bg-[#0f0f0f] overflow-y-scroll text-white">
      <section className="w-[81.25rem] mx-auto p-10">
        <iframe
          id="player"
          type="texy/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
        />
        <div>
          <h2>{video.snippet.title}</h2>
          <ChannelInfo
            id={video.snippet.channelId}
            title={video.snippet.channelTitle}
          />
          <p>{video.snippet.description}</p>
        </div>
      </section>
    </div>
  );
}
