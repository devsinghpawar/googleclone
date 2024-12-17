"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function GoogleLensSearch({ onButtonClick }) {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: async (acceptedFiles) => {
      try {
        const file = acceptedFiles[0];
        setIsLoading(true);
        if (file) {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          const objectURL = URL.createObjectURL(file); // Create temporary URL
          sessionStorage.setItem("uploadedImageURL", objectURL); // Save the URL
          router.push("/imageresult");
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    },
  });
  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    try {
      console.log(file);
      setIsLoading(true);
      if (file) {
        // const reader = new FileReader();
        // reader.onload = (e) => {};
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const objectURL = URL.createObjectURL(file);
        sessionStorage.setItem("uploadedImageURL", objectURL);
        router.push("/imageresult");
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col  w-[590.4px] h-[362px] items-center justify-center  bg-[#2F3133]  p-4 rounded-3xl">
      <div
        role="button"
        aria-label="Close"
        tabIndex="0"
        onClick={onButtonClick}
        className="absolute top-4 right-4 cursor-pointer rounded-full p-2  text-white  "
      >
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="w-5 h-5 text-white"
          fill="currentColor"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </div>

      <h1 className=" mt-1">Search any image with Google Lens</h1>

      <div
        {...getRootProps()}
        className="flex flex-col items-center mt-5 w-[548.8px] h-[278.4px]   bg-[#1F2125] rounded-xl  border-[#2F3133] border-dashed border-2 relative"
      >
        <input {...getInputProps()} />

        {isLoading ? (
          <div
            className="text-center rounded-lg absolute  flex justify-center items-center bg-[#5ea5ed]   border-[#5ea5ed] border-dashed border-2 w-full h-full  bg-opacity-10 flex-col
          "
          >
            <div className="animate-spin h-6 w-6 border-4 border-blue-500 border-t-transparent rounded-full bg-[#2F3133] "></div>
            <div className="text-[#5ea5ed] mt-2"> Uploading...</div>
          </div>
        ) : isDragActive ? (
          <div
            className="text-center rounded-lg absolute  flex justify-center items-center bg-[#5ea5ed]   border-[#5ea5ed] border-dashed border-2 w-full h-full  bg-opacity-10 text-[#939698]
             "
          >
            Drag an image here
          </div>
        ) : (
          <>
            <div className="text-center pt-4 rounded-lg w-full max-w-md flex justify-center items-center gap-4 h-[186px] ">
              <div>
                <svg
                  width="59"
                  height="45"
                  viewBox="0 0 59 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.3332 13.747L1.58323 13.747L1.58323 43.4553L40.3332 43.4553L40.3332 13.747Z"
                    fill="#3C4043"
                  ></path>
                  <path
                    d="M40.3332 13.747L17.0832 13.747L17.0832 33.122L40.3332 33.122L40.3332 13.747Z"
                    fill="#3C4043"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.614479 12.7783L6.74988 12.7783L6.74988 14.7158L2.55198 14.7158L2.55198 18.9137L0.614479 18.9137L0.614479 12.7783Z"
                    fill="#BDC1C6"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M39.3644 42.4866L39.3644 38.2887L41.3019 38.2887L41.3019 44.4241L35.1665 44.4241L35.1665 42.4866L39.3644 42.4866Z"
                    fill="#BDC1C6"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.614479 38.2887L2.55198 38.2887L2.55198 42.4866L6.74987 42.4866L6.74987 44.4241L0.614479 44.4241L0.614479 38.2887Z"
                    fill="#BDC1C6"
                  ></path>
                  <path
                    d="M19.6665 30.2531H58.4165L58.4165 0.544722H19.6665L19.6665 30.2531Z"
                    fill="#AECBFA"
                  ></path>
                  <path
                    d="M19.6665 21.8429L19.6665 30.2525L58.4168 30.2525L58.4168 19.7406L49.6667 12.4069C48.6234 11.5342 47.2931 11.0699 45.9272 11.1018C44.5614 11.1337 43.2547 11.6596 42.2542 12.5801L33.4166 20.7918L28.4166 17.2548C27.7332 16.7781 26.9013 16.5563 26.0684 16.6288C25.2354 16.7012 24.4554 17.0632 23.8666 17.6505L19.6665 21.8429Z"
                    fill="#669DF6"
                  ></path>
                  <path
                    d="M30.0056 12.9386C31.7315 12.9386 33.1306 11.5395 33.1306 9.8136C33.1306 8.08773 31.7315 6.68863 30.0056 6.68863C28.2798 6.68863 26.8807 8.08773 26.8807 9.8136C26.8807 11.5395 28.2798 12.9386 30.0056 12.9386Z"
                    fill="#E8F0FE"
                  ></path>
                </svg>
              </div>

              <div>
                <p className="text-[#939698]">
                  Drag an image here or{" "}
                  <span className="text-[#8AB4F8] cursor-pointer underline  border-2  border-transparent hover:border-2">
                    <label className="  w-full text-center text-[16px] cursor-pointer tbg-gray-100   ">
                      upload a file
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        onClick={(e) => e.stopPropagation()}
                        className="hidden"
                      />
                    </label>
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center ">
              <div className="flex-1 border-t w-[223px] border-[#3C4043]"></div>
              <span className="mx-4 text-gray-400 text-[14px]">OR</span>
              <div className="flex-1 border-t border-[#3C4043]  w-[223px]"></div>
            </div>

            <div className="flex items-center w-[508.8px] mt-2  space-x-2">
              <input
                type="text"
                placeholder="Paste image link"
                className="w-[405px] h-[41.6px] border  px-[20px]
           bg-[#2F3133]
             text-[14px] border-gray-700 rounded-3xl focus:outline-none  focus:ring-[1px] focus:ring-blue-500  flex self-start  placeholder-stone-500 "
              />
              <button
                className=" px-6 py-2 text-[14px] text-blue-300 border 
          border-gray-700 rounded-3xl     bg-[#2F3133]  hover:bg-[#292a2a] hover:text-blue-200  "
              >
                Search
              </button>
            </div>
          </>
        )}
      </div>

      {/* <div className="flex flex-col mt-4 space-y-2 text-gray-500">
          <div className="animate-spin h-6 w-6 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          <p>Uploading...</p>
        </div> */}
    </div>
  );
}
