import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export const Navigation = () => {
  return (
    <nav className="bg-[#202124] text-white p-4 px-6 flex justify-between text-sm items-center ">
      <div className="flex gap-5 items-center justify-center  text-[#E8E8E8] ">
        <Link href="/about">About</Link>
        <Link href="/store">Store</Link>
      </div>
      <div className="flex gap-8 items-center justify-center text-[13px]">
        <div className="flex gap-8">
          <Link href={"https://mail.google.com"}>Gmail</Link>
          <Link href={"https://image.google.com"}>Images</Link>
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
    </nav>
  );
};
