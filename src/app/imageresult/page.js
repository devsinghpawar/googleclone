"use client";
import Image from "next/image";
import { MdOutlineFileUpload } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import CustomCropper from "../components/test";
import { asdsa } from "../components/CHUTAD";

const ImageResult = () => {
  return (
    <div className="overflow-x-none">
      <div className="bg-white text-[#5F6368] font-semibold p-4 px-6 h-[64px] flex justify-between text-sm items-center overflow-x-none ">
        <div>
          <span>Google</span>
        </div>

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

      <div class="flex flex-row items-stretch border-t border-t-gray-200 box-border  h-[673.6px] overflow-x-none relative bg-white ">
        <div className="flex flex-col items-center bg-[#202124] box-border h-full  w-[50%] ">
          <div>
            <div className=" flex border w-[195.5px] h-[48px] justify-center items-center rounded-3xl border-gray-500  mt-10 ">
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
          </div>

          <div className="w-[80%] h-[70%] p-4">
            {/* <div>
              <Image
                src="https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww"
                alt="//"
                width={100}
                height={100}
              />
            </div> */}
            <CustomCropper />
          </div>

          <div className="w-[232.1px] h-[32px] border   rounded-3xl bg-[#1F2125]  flex items-center text-[14px] text-white border-gray-500  ">
            <div className="text-black bg-white rounded-3xl h-[32px] w-[99px] flex text-center items-center justify-center">
              Search
            </div>
            <div className="flex  w-full justify-around">
              <div>Text</div>
              <div>Translate</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-wrap items-center bg-white box-border p-8  md:bg-red-200 h-full  w-[50%] text-black overflow-x-none ">
          {asdsa.map((el, i) => {
            return (
              <div key={i}>
                <Image src={el.url} alt="sjdisjd" width={200} height={200} />
                {el.arr.map((ex, x) => (
                  <span key={x}>{ex}</span>
                ))}
              </div>
            );
          })}

          <div>
            <Image src="" alt="//" width={200} height={300} />
            <p>Instagram</p>
            <span>Uniqlo Sweat Cardigan</span>
            <span>in Stock</span>
            <span>See exact matches </span>
          </div>

          <div>
            <Image src="" alt="//" width={200} height={400} />
            <p>Instagram</p>
            <span>Uniqlo Sweat Cardigan</span>
            <span>in Stock</span>
            <span>See exact matches </span>
          </div>

          <div>
            <Image src="" width={100} height={200} alt="//" />
            <p>Instagram</p>
            <span>Uniqlo Sweat Cardigan</span>
            <span>in Stock</span>
            <span>See exact matches </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageResult;
