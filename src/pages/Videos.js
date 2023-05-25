import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/data/ListByKeyword.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥 뜨끈한 데이터를 네트워크에서 받아옴");
        setVideos(data.items);
      });
    return () => {
      console.log("깨끗하게 청소하는 일들을 합니다.");
    };
  }, [keyword]);
  console.log(videos);

  return (
    <div className="w-[100%] h-[calc(100vh-60px)] bg-[#0f0f0f] overflow-y-scroll text-white">
      <div className="w-[81.25rem] mx-auto p-10">
        Videos {keyword ? `🔍${keyword}` : "🔥"}
      </div>
    </div>
  );
}
