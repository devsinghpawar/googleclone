"use client";
import Image from "next/image";
import { HomeSearch } from "./components/HomeSearch";
import GoogleLensSearch from "./components/SearchImage";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <div className="flex justify-center h-[169.6px] w-full items-end">
        <div className="">
          <Image
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
            alt="google"
            width={272}
            height={92}
          />
        </div>
      </div>

      <div className=" text-white text-center flex-grow place-items-center flex flex-col items-center p-[20px]  ">
        <HomeSearch />
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
