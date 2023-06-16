import React, { useContext, useEffect, useState } from "react";
import { AiFillYoutube } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { IoIosSearch } from "react-icons/io";
import { BsFillKeyboardFill } from "react-icons/bs";
import { CiLight, CiDark } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import { DarkModeContext } from "../provider/DarkModeContext";

export default function Header() {
  const [appear, setAppear] = useState(false);
  const [title, setTitle] = useState("");

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

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
    <div
      className={`${
        darkMode ? "bg-[#0f0f0f]" : "bg-white"
      } w-full h-[3.75rem] mx-auto`}
    >
      <div
        className={`${
          darkMode ? "border-[#ffffff36]" : "border-[#7b7b7b7e]"
        } lg:w-4/6 md:w-5/6 h-[100%] mx-auto flex flex-row items-center justify-between p-2 pr-[36]px box-border border-solid border-b-[1px]`}
      >
        <div
          className="flex flex-row hover:cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <AiFillYoutube className="text-6xl text-brand" />
          <ImYoutube2
            className={`${darkMode ? "text-white" : "text-[0f0f0f]"} text-6xl`}
          />
        </div>
        <div
          className={`${
            appear ? "md:w-[54%]" : "md:w-1/2"
          } flex flex-row items-center mx-auto`}
        >
          <div className="relative md:w-[88%]">
            <IoIosSearch
              className={`${
                appear ? "block" : "hidden "
              } absolute top-[50%] mt-[-10px] left-[15px] text-[20px] text-[#717171]`}
            />
            <input
              type="text"
              placeholder="검색"
              className={`${
                appear
                  ? "md:w-full pl-[3rem] border-[#4a7dff]"
                  : "md:w-full pl-[1rem] border-[#303030]"
              } h-[40px] rounded-l-full pr-1 box-border border-solid border-[0.6px] placeholder:text-[#888888] outline-none  
              ${
                darkMode
                  ? "bg-[#121212] text-white"
                  : "bg-[#dadadab8] text-black"
              }`}
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
            className={`${
              darkMode
                ? "border-[#ffffff36] bg-[#ffffff14]"
                : "border-[#303030] bg-[#383838b8]"
            } lg:w-[12%] h-[2.5rem] px-[1px] py-[6px] rounded-r-full box-border flex flex-row justify-center items-center border-solid border-[1px]`}
            onClick={handleClickSearchBtn}
          >
            <IoIosSearch className="text-white text-[1.5rem]" />
          </button>
        </div>

        <button onClick={toggleDarkMode} className="border-none bg-transparent">
          {darkMode ? (
            <CiLight className="text-white text-[30px]" />
          ) : (
            <CiDark className="text-[#0f0f0f] text-[30px]" />
          )}
        </button>
      </div>
    </div>
  );
}
