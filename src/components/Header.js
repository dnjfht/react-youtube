import React, { useEffect, useState } from "react";
import { AiFillYoutube } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { IoIosSearch } from "react-icons/io";
import { BsFillKeyboardFill } from "react-icons/bs";
import { CiLight, CiDark } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";

export default function Header() {
  const [appear, setAppear] = useState(false);
  const [title, setTitle] = useState("");
  const [dark, setDark] = useState(true);

  const navigate = useNavigate();
  const { keyword } = useParams();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleClickSearchBtn = (e) => {
    e.preventDefault();

    navigate(`/videos/${title}`);
  };

  useEffect(() => {
    setTitle(keyword || "");
  }, [keyword]);

  return (
    <div className=" w-100% h-[3.75rem] bg-[#0f0f0f] mx-auto">
      <div className="w-[81.25rem] h-[100%] mx-auto flex flex-row items-center justify-between p-2 pr-[36]px box-border border-solid border-b-[1px] border-[#ffffff36] ">
        <div
          className="flex flex-row hover:cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <AiFillYoutube className="text-6xl text-brand" />
          <ImYoutube2 className="text-6xl text-white" />
        </div>
        <div className="flex flex-row items-center mx-auto">
          <div className="relative">
            <IoIosSearch
              className={`${
                appear ? "block" : "hidden "
              } absolute top-[50%] mt-[-10px] left-[15px] text-[20px] text-[#bebebe]`}
            />
            <input
              type="text"
              placeholder="검색"
              className={`${
                appear
                  ? "w-[36rem] pl-[3rem] border-[#4a7dff]"
                  : "w-[33.75rem] pl-[1rem] border-[#303030]"
              } h-[40px] bg-[#121212] rounded-l-full pr-1 box-border border-solid border-[0.6px] outline-none placeholder:text-[#888888] text-white`}
              onFocus={() => {
                setAppear(true);
              }}
              onBlur={() => {
                setAppear(false);
              }}
              onChange={handleChangeTitle}
              value={title}
            />
            <BsFillKeyboardFill className="absolute top-[50%] mt-[-8px] right-2.5 text-[#888888]" />
          </div>

          <button
            type="button"
            className="w-[4rem] h-[2.5rem] bg-[#ffffff14] px-[1px] py-[6px] rounded-r-full box-border flex flex-row justify-center items-center border-solid border-[1px] border-[#ffffff36]"
            onClick={handleClickSearchBtn}
          >
            <IoIosSearch className="text-[1.5rem] text-white" />
          </button>
        </div>

        <button
          onClick={() => {
            setDark((prev) => !prev);
          }}
          className="border-none bg-transparent"
        >
          {dark ? (
            <CiDark className="text-white text-[30px]" />
          ) : (
            <CiLight className="text-white text-[30px]" />
          )}
        </button>
      </div>
    </div>
  );
}
