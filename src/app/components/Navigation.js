import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export const Navigation = () => {
  return (
    <nav className="bg-[#1F2125] text-white p-4 px-6 flex justify-between text-sm items-center ">
      <div className="flex gap-5 items-center justify-center ">
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
          <div className="bg-[#1285D2] text-white py-3 px-3 rounded-full cursor-pointer ">
            A
          </div>
        </div>
      </div>
    </nav>
  );
};
