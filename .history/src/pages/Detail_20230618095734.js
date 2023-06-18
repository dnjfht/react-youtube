import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { videoId } = useParams();
  console.log(videoId);

  return (
    <div className="w-[100%] h-[calc(100vh-60px)] bg-[#0f0f0f] overflow-y-scroll text-white">
      <div className="w-[81.25rem] mx-auto p-10">Detail Video!</div>
    </div>
  );
}
