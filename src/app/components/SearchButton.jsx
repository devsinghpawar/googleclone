export function SearchButton({ handleSubmit, suggestions }) {
  return (
    <button
      className={` rounded-md text-sm text-white hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shado ${
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
      className={`  rounded-md  text-sm text-white hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm  ${
        suggestions
          ? "bg-[#3C4043]  ml-1  hover:border-neutral-500 hover:border"
          : "bg-[#303134] hover:bg-[#2F3133] hover:border-neutral-500 hover:border"
      } `}
      onClick={randomSearch}
    >
      {randomSearchLoading ? "Loading...." : `I'm Feeling Lucky`}
    </button>
  );
}
