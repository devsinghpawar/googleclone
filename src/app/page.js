import Image from "next/image";
import { HomeSearch } from "./components/HomeSearch";
import GoogleLensSearch from "./components/SearchImage";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <div className=" text-white text-center flex-grow place-items-center flex flex-col items-center mt-24  ">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
          alt="google"
          width={272}
          height={92}
        />

        <HomeSearch />

        <div className="flex flex-col space-y-2 justify-center  mt-8 mb-4  sm:flex-row ">
          Google offered in:
          <div className="text-[#4589e2] flex gap-4">
            <a href="#lang" className="ml-1">
              हिन्दी
            </a>
            <a href="#lang">বাংলা</a>
            <a href="#lang">తెలుగు</a>
            <a href="#lang">मराठी</a>
            <a href="#lang">தமிழ்</a>
            <a href="#lang">ગુજરાતી</a>
            <a href="#lang">ಕನ್ನಡ</a>
            <a href="#lang">മലയാളം</a>
            <a href="#lang">ਪੰਜਾਬੀ</a>
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
