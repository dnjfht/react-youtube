import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";
import { DarkModeContext } from "../provider/DarkModeContext";

export default function Detail() {
  const {
    state: { video },
  } = useLocation();
  console.log(video);

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`${
        darkMode ? "bg-[#0f0f0f]" : "bg-[#ffffff]"
      } w-[100%] h-[calc(100vh-60px)] pt-[12px] overflow-y-scroll text-white`}
    >
      <section className="lg:w-4/6 md:w-5/6 sm:w-[96%] w-[96%] mx-auto flex xl:flex-row sm:flex-col flex-col">
        <article className="xl:w-9/12 sm:w-full w-full">
          <iframe
            id="player"
            type="texy/html"
            width="100%"
            height="640"
            src={`http://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
          />
          <div className="mt-3">
            <h2>{video.snippet.title}</h2>
            <ChannelInfo
              id={video.snippet.channelId}
              title={video.snippet.channelTitle}
            />
            <p>{video.snippet.description}</p>
          </div>
        </article>

        <section className="lg:w-3/12 lg:pl-[1.4rem]">
          <RelatedVideos id={video.id} />
        </section>
      </section>
    </div>
  );
}
