import Link from "next/link";

export const Footer = () => {
  return (
    <div>
      <div className="bg-[#171717] text-white  border-b border-[#303030]   ">
        <div className=" text-[15px] py-[15px] px-[30px] h-[48.4px]">India</div>
      </div>
      <div className="bg-[#171717] text-white flex justify-between text-sm px-[20px] h-[46.8px]">
        <div className="flex ">
          <Link href="/advertising" className="p-[15px]">
            Advertising
          </Link>
          <Link className="p-[15px]" href="/Business">
            Business
          </Link>
          <Link className="p-[15px]" href="/HowSearchworks">
            How Search works
          </Link>
        </div>
        <div className="flex">
          <Link className="p-[15px]" href="/Privacy">
            Privacy
          </Link>
          <Link className="p-[15px]" href="/Terms">
            Terms
          </Link>
          <Link className="p-[15px]" href="/Settings">
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};
