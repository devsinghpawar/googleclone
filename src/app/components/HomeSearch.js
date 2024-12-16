"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
// import { FaRegClock } from "react-icons/fa6";
import Link from "next/link";
import { func } from "./getSearch";
import GoogleLensSearch from "./SearchImage";
import { SearchButton, FeelingLucky } from "./Button";
import { getAutocomplete } from "@/api/serpapi";

export const HomeSearch = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const [lens, setLens] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [debouncedValue, setDebouncedValue] = useState("");
  const [popUp, setPopUp] = useState(false);
  const cropperRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(input);
    }, 200);
    // if (!input) return setSuggestions([]);
    return () => clearTimeout(timer);
  }, [input]);

  useEffect(() => {
    const suggData = async () => {
      const as = await func();
      // setSuggestions(as.suggestions.map((el) => el.value));
    };
    // if (!input) return setSuggestions([]);

    if (debouncedValue) {
      suggData();
    }
  }, [debouncedValue]);

  useEffect(() => {
    const asd = async () => {
      const as = await getAutocomplete();
      setSuggestions(as.suggestions.map((el) => el.value));
    };
    asd();
  }, []);
  const randomSearch = async (e) => {
    console.log(e);
  };

  const handleClick = () => {
    setLens(!lens);
  };

  const handleChange = async (value) => {
    setInput(value);
  };

  if (lens) return <GoogleLensSearch onButtonClick={handleClick} />;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`flex w-[582px] h-[46px] mt-1 mx-auto max-w-[90%]  ${
          setInput && suggestions.length > 0
            ? "rounded-tr-[24px] rounded-tl-[24px] bg-[#303134]"
            : "rounded-[24px] bg-[#4D5156]"
        }  border-[#636468] px-5 py-3  hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl relative `}
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          ref={cropperRef}
          type="text"
          className={`flex-grow focus:outline-none  ${
            setInput && suggestions.length > 0
              ? " bg-[#303134]"
              : " bg-[#4D5156]"
          } `}
          title="search"
          onChange={(e) => handleChange(e.target.value)}
        />
        {setInput && suggestions.length > 0 && (
          <div className="max-h-[409.2px] h-auto w-full absolute bg-[#303134] pb-2 left-0 top-11 rounded-b-3xl   ">
            <div className="overflow-y-hidden max-h-[300px] pb-[8px]">
              <ul
                className=" w-full   "
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {suggestions.map((el) => (
                  <div
                    key={el}
                    className="flex  pl-[14px] pr-[20px] items-center  group hover:bg-[#3C4043]"
                  >
                    <AiOutlineSearch className="text-xl text-gray-500 mr-3" />

                    <li className="w-[470.4px] h-[30.4px] m-1  text-white flex  items-center  ">
                      {el}
                    </li>

                    <button className="text-white hidden group-hover:block  cursor-pointer hover:underline  ">
                      Delete
                    </button>
                  </div>
                ))}
              </ul>
            </div>

            <div className="flex flex-row  sm:space-y-0 justify-center mt-8 sm:space-x-4 mb-4  items-center ">
              <SearchButton
                handleSubmit={handleSubmit}
                suggestions={suggestions}
              />

              <FeelingLucky
                randomSearchLoading={randomSearchLoading}
                randomSearch={randomSearch}
                suggestions={suggestions}
              />
            </div>
          </div>
        )}

        <div className="flex gap-4">
          <Link href="/voicesearch">
            <svg
              className="text-blue-500 w-6 hover:cursor-pointer"
              focusable="false"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>search by voice</title>
              <path
                fill="#4285f4"
                d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
              ></path>
              <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
              <path
                fill="#fbbc04"
                d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
              ></path>
              <path
                fill="#ea4335"
                d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
              ></path>
            </svg>
          </Link>

          <svg
            onClick={handleClick}
            className="text-blue-500 w-6 h-6 hover:cursor-pointer"
            focusable="false"
            viewBox="0 0 192 192"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>search by image</title>
            <rect fill="none" height="192" width="192"></rect>
            <g>
              <circle fill="#34a853" cx="144.07" cy="144" r="16"></circle>
              <circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle>
              <path
                fill="#ea4335"
                d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"
              ></path>
              <path
                fill="#fbbc04"
                d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"
              ></path>
              <path
                fill="#4285f4"
                d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"
              ></path>
            </g>
          </svg>
        </div>
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4 mb-4 ">
        <SearchButton handleSubmit={handleSubmit} />

        <FeelingLucky
          randomSearchLoading={randomSearchLoading}
          randomSearch={randomSearch}
        />
      </div>

      <div className="flex flex-col space-y-2 justify-center w-[533.39px] text-[#BFBFBF]  mt-8 mb-4  sm:flex-row text-[13px]  items-center  ">
        Google offered in:
        <div className="text-[#99C3FF] flex   ">
          <a href="#lang" className="px-[3px]">
            हिन्दी
          </a>
          <a className="px-[3px]" href="#lang">
            বাংলা
          </a>
          <a className="px-[3px]" href="#lang">
            తెలుగు
          </a>
          <a className="px-[3px]" href="#lang">
            मराठी
          </a>
          <a className="px-[3px]" href="#lang">
            தமிழ்
          </a>
          <a className="px-[3px]" href="#lang">
            ગુજરાતી
          </a>
          <a className="px-[3px]" href="#lang">
            ಕನ್ನಡ
          </a>
          <a className="px-[3px]" href="#lang">
            മലയാളം
          </a>
          <a className="px-[3px]" href="#lang">
            ਪੰਜਾਬੀ
          </a>
        </div>
      </div>
    </>
  );
};
