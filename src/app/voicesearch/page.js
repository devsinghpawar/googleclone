import { IoMdMic } from "react-icons/io";

export default function VoiceSearch() {
  return (
    <div className="grid  h-screen place-items-center">
      <div
        className="flex justify-between items-center 
       w-[660px] h-[300px]"
      >
        <div className=" w-[360px] flex items-center text-[32px]">
          Listening...
        </div>

        <div className=" w-[300px] flex items-end justify-end">
          <div className=" border bg-white border-slate-100  rounded-full flex justify-center w-[166.6px]  h-[166.6px]  items-center">
            <IoMdMic size={80} color="red" />
          </div>
        </div>
      </div>
    </div>
  );
}
