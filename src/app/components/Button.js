export function SearchButton({ handleSubmit, suggestions }) {
  return (
    <button
      className={` rounded-sm text-sm text-[#E8E8E8] hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md px-4 h-9 mx-[5px] w-[127px] transition-shado ${
        suggestions
          ? "bg-[#3C4043]  mr-1 hover:border-neutral-500 hover:border"
          : "bg-[#303134] hover:border-neutral-500 hover:border"
      }`}
      onClick={handleSubmit}
    >
      Google Search
    </button>
  );
}
export function FeelingLucky({
  randomSearchLoading,
  randomSearch,
  suggestions,
}) {
  return (
    <button
      disabled={randomSearchLoading}
      className={`rounded-sm text-sm text-[#E8E8E8] hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md px-4 h-9 mx-[5px] transition-shado w-[142.1px]  ${
        suggestions
          ? "bg-[#3C4043]  hover:border-neutral-500 hover:border"
          : "bg-[#303134] hover:bg-[#2F3133] hover:border-neutral-500 hover:border"
      } `}
      onClick={randomSearch}
    >
      {randomSearchLoading ? "Loading...." : `I'm Feeling Lucky`}
    </button>
  );
}
