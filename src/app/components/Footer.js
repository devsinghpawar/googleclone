import Link from "next/link";

export const Footer = () => {
  return (
    <div>
      <div className="bg-[#171717] text-white  border-b-2 border-[#303030] ">
        <div className=" py-4 px-7">India</div>
      </div>
      <div className="bg-[#171717] text-white flex justify-between text-sm px-3">
        <div className="flex ">
          <Link href="/advertising" className="p-4">
            Advertising
          </Link>
          <Link className="p-4" href="/Business">
            Business
          </Link>
          <Link className="p-4" href="/HowSearchworks">
            How Search works
          </Link>
        </div>
        <div className="flex">
          <Link className="p-4" href="/Privacy">
            Privacy
          </Link>
          <Link className="p-4" href="/Terms">
            Terms
          </Link>
          <Link className="p-4" href="/Settings">
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};
