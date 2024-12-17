"use client";
import Image from "next/image";
import { MdOutlineFileUpload } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import CustomCropper from "../components/Cropper";
import { imgcont } from "../components/ImgData";

import { Datafunc } from "../data/datafile";
import { useEffect, useState } from "react";
import Link from "next/link";

const ImageResult = () => {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    const storedURL = sessionStorage.getItem("uploadedImageURL");
    if (storedURL) {
      setImageURL(storedURL);
    }
  }, []);

  const arr = [[], [], [], []];
  const func = () => {
    const data = Datafunc();
    for (let i = 0; i <= data.length - 4; i = i + 4) {
      const element = data[i];
      arr[0].push(data[i]);
      arr[1].push(data[i + 1]);
      arr[2].push(data[i + 2]);
      arr[3].push(data[i + 3]);
    }
    console.log(arr);
  };
  func();

  return (
    <div className="overflow-x-none  ">
      <div className="bg-white text-[#5F6368] font-semibold p-4 px-6 h-[64px] flex justify-between text-sm items-center overflow-x-none ">
        <Link href="/">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0iTD7C0BZFEnu5OYvcsp_0YaK9yCaca62zQ&s"
            alt="googlelogo"
            width={74}
            height={24}
            className="bg-white"
          />
        </Link>

        <div className="flex gap-8 items-center justify-center text-[13px] ">
          <div className="flex gap-2 items-center">
            <MdOutlineFileUpload size={24} />
            <span className="text-[14px]">Upload</span>
          </div>
          <div className="flex gap-8 items-center justify-center ">
            <TbGridDots size={24} className=" cursor-pointer" />
            <div className="bg-[#1285D2] text-white p-[14px] relative  rounded-full cursor-pointer ">
              <p
                className="absolute translate-y-2/4 translate-x-2/4 "
                style={{ right: "50%", bottom: "50%" }}
              >
                A
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-row items-stretch border-t border-t-gray-200 box-border  h-[673.6px] overflow-x-none lg:relative bg-white lg:flex-row md:flex-col sm:flex-col ">
        <div className="flex flex-col items-center bg-[#1F2125] box-border h-full  w-[50%] md:w-[100%]  lg:relative sm:w-[100%] ">
          <div
            className=" flex border w-[195.5px] h-[48px] justify-center items-center rounded-full border-[#3B3D41] lg:absolute top-[30px]
           "
          >
            <div
              className="flex items-center text-[#F8F9FA] font-medium tracking-[0.1px] leading-[24px] text-center h-[24px] w-[161.5px] 
              "
            >
              <svg
                enableBackground="new 0 0 24 24"
                height="18"
                viewBox="0 0 24 24"
                width="18"
                focusable="false"
                className="block cursor-default fill-[#F8F9FA] flex-shrink-0 font-roboto text-[#F8F9FA] text-[16px] leading-[24px] tracking-[0.1px] h-[18px] w-[18px] mr-[6px] overflow-hidden pointer-events-auto text-center select-none antialiased"
              >
                <rect fill="none" height="24" width="24"></rect>
                <path d="M19.3,16.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S11,12,11,14.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l3.2,3.2 l1.4-1.4L19.3,16.9z M15.5,17c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S16.9,17,15.5,17z M12,20v2 C6.48,22,2,17.52,2,12C2,6.48,6.48,2,12,2c4.84,0,8.87,3.44,9.8,8h-2.07c-0.64-2.46-2.4-4.47-4.73-5.41V5c0,1.1-0.9,2-2,2h-2v2 c0,0.55-0.45,1-1,1H8v2h2v3H9l-4.79-4.79C4.08,10.79,4,11.38,4,12C4,16.41,7.59,20,12,20z"></path>
              </svg>
              Find image source
            </div>
          </div>

          <div className="w-[80%] h-[70%] p-4  lg:absolute top-32  md:w-[50%] sm:w-[50%] ">
            <CustomCropper imageURL={imageURL} />
          </div>

          <div className="w-[232.1px] h-[32px] border-none   rounded-3xl bg-[#383D3D]  flex items-center text-[14px] text-white lg:absolute   bottom-12 ">
            <div className="text-[#383C3F] bg-white rounded-3xl h-[32px] w-[99px] flex text-center items-center justify-center">
              Search
            </div>
            <div className="flex  w-full justify-around">
              <div>Text</div>
              <div>Translate</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-wrap items-center bg-white box-border  h-full  w-[50%] text-black overflow-x-none overflow-y-auto md:w-[100%] sm:w-[100%] break-words m-2 mr-0  sm:flex-col ">
          {arr.map((le, gi) => (
            <div className="flex flex-col m-2 " key={gi}>
              {gi == 1 && (
                <div className="w-[160.7px] mb-[8px] gap-1 flex flex-col text-[#202124] ">
                  <div className=" text-[16px]  mt-[4px] font-semibold  ">
                    Related search
                  </div>

                  <div className="p-[8px] flex bg-[#F6F8FA] rounded-md ">
                    <span className="px-[4px] text-[14px] font-semibold   ">
                      Tonal print loose fit casual shirt
                    </span>
                    <Image
                      src={imgcont[1].url}
                      width={44}
                      height={20}
                      alt="image"
                      className="  rounded-md "
                    />
                  </div>
                </div>
              )}

              {le.map((el, i) => {
                return (
                  <div
                    className="flex flex-col bg-white rounded-2xl mb-2 w-[164.7px] relative "
                    key={i}
                  >
                    <Image
                      src={el.image}
                      alt="sjdisjd"
                      width={200}
                      height={200}
                      className=" rounded-2xl"
                    />

                    <div className="inline-flex  items-center  py-[4px] px-[2px] bg-[#FFFFFFE6]   rounded-full absolute top-4  left-4">
                      <svg
                        enable-background="new 0 0 24 24"
                        focusable="false"
                        height="16"
                        viewBox="0 0 24 24"
                        width="16"
                        class="my-[2px] ml-[6px] mr-[4px]"
                      >
                        <g>
                          <rect fill="none" height="16" width="16"></rect>
                        </g>
                        <g>
                          <g>
                            <path d="M19,2h-5.87c-0.8,0-1.56,0.32-2.12,0.88l-8.13,8.13c-1.17,1.17-1.17,3.07,0,4.24l5.87,5.87C9.34,21.71,10.11,22,10.87,22 s1.54-0.29,2.12-0.88L21.12,13c0.56-0.56,0.88-1.33,0.88-2.12V5C22,3.34,20.66,2,19,2z M20,10.88c0,0.27-0.1,0.52-0.29,0.71 l-8.13,8.12C11.33,19.97,11.03,20,10.87,20s-0.45-0.04-0.71-0.29l-5.87-5.87C4.04,13.58,4,13.29,4,13.13s0.04-0.45,0.29-0.71 l8.13-8.13C12.61,4.1,12.87,4,13.13,4H19c0.55,0,1,0.45,1,1V10.88z"></path>
                            <circle cx="16.5" cy="7.5" r="1.5"></circle>
                          </g>
                        </g>
                      </svg>

                      <span className="text-[14px] text-[#202124] mr-Q[8px] font-sans font-semibold ">
                        {el.price}*
                      </span>
                    </div>

                    <div className="flex flex-col mt-[12px] mb-[8px] mx-[4px]  ">
                      <div className="mb-[6px] h-[20px] ">
                        <span className="mr-[8px]"></span>
                        <span className="text-[14px] text-[#5F6368]">
                          {el.brand}
                        </span>
                      </div>
                      <span className=" text-[14px] text-[#3C4043] ]">
                        {" "}
                        {el.name}
                      </span>
                      <span className="text-[12px] text-[#188038]  ">
                        In stock
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageResult;
