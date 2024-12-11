import Image from "next/image";

export default function GoogleLensSearch() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-gray-50 p-4">
      {/* Close Button */}
      <div
        role="button"
        aria-label="Close"
        tabIndex="0"
        className="absolute top-4 right-4 cursor-pointer rounded-full p-2 hover:bg-gray-200"
      >
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-gray-600"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </div>

      {/* Header */}
      <h1 className="text-xl font-semibold text-gray-800 mt-8">
        Search any image with Google Lens
      </h1>

      {/* Drag and Upload Section */}
      <div className="flex flex-col items-center mt-6">
        <Image
          src="https://lens.google.com/gen204"
          alt="Google Lens"
          className="w-24 h-24 mb-4"
          width={24}
          height={24}
        />
        <div className="text-center p-4 border-dashed border-2 border-gray-300 rounded-lg w-full max-w-md">
          <svg
            width="59"
            height="45"
            viewBox="0 0 59 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-2"
          >
            {/* SVG Path */}
            <path
              d="M40.3332 13.747L1.58323 13.747L1.58323 43.4553L40.3332 43.4553L40.3332 13.747Z"
              className="fill-gray-300"
            />
          </svg>
          <p className="text-sm text-gray-600">
            Drag an image here or{" "}
            <span className="text-blue-500 cursor-pointer hover:underline">
              upload a file
            </span>
          </p>
        </div>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Input Field */}
        <div className="flex items-center w-full max-w-md space-x-2">
          <input
            placeholder="Paste image link"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>

      {/* Drop Section */}
      <div className="mt-4 text-gray-600">
        <p>Drop an image here</p>
      </div>

      {/* Loading Section */}
      <div className="flex flex-col items-center mt-4 space-y-2 text-gray-500">
        <div className="animate-spin h-6 w-6 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        <p>Uploading...</p>
      </div>
    </div>
  );
}
