import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { IoIosSearch } from "react-icons/io";
import { BsFillKeyboardFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className=" w-100% h-[3.75rem] bg-[#0f0f0f] mx-auto">
      <div className="w-[81.25rem] h-[100%] mx-auto flex flex-row items-center justify-between p-2 pr-[36]px box-border border-solid border-b-[1px] border-[#ffffff36] ">
        <div className="flex flex-row">
          <AiFillYoutube className="text-6xl text-red-600" />
          <ImYoutube2 className="text-6xl text-white" />
        </div>
        <div className="flex flex-row items-center mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="검색"
              className="w-[33.75rem] h-10 bg-[#121212] rounded-l-full pr-1 pl-4 box-border border-solid border-[1px] border-[#ffffff36] outline-none placeholder:text-[#888888] text-white"
            />
            <BsFillKeyboardFill className="absolute top-[50%] mt-[-8px] right-2.5 text-[#888888]" />
          </div>
          <button
            type="button"
            className="w-[4rem] h-[2.5rem] bg-[#ffffff14] px-[1px] py-[6px] rounded-r-full box-border flex flex-row justify-center items-center border-solid border-[1px] border-[#ffffff36]"
          >
            <IoIosSearch className="text-[1.5rem] text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
