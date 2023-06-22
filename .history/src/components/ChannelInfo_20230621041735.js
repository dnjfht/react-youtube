import React from "react";
import { useYoutubeApi } from "../provider/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function ChannelInfo({ id, title }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ["channel", id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 }
    // 채널 이미지가 빈번히 바뀌는 것이 아니기 때문에
  );

  return (
    <div className="w-full pt-3 pb-4 flex items-center">
      {url && (
        <img
          className="w-[2.5rem] h-[40px] object-cover rounded-full"
          src={url}
          alt={title}
        />
      )}
      <p className="text-[#f1f1f1] text-[1rem] ml-3">{title}</p>
    </div>
  );
}
