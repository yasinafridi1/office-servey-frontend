import React, { useRef, useState } from "react";

const Modal = ({ open, onClose, data }) => {
  const [copied, setIsCopied] = useState(false);
  const inputRef = useRef(null);

  const handleCopyClick = async () => {
    try {
      if (inputRef.current) {
        await navigator.clipboard.writeText(data?.url);
        setIsCopied(true);
        // Reset the "Copied" state after a short delay
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <div
      className={`${
        open
          ? "w-full h-full fixed top-0 left-0 z-50 flex justify-center items-center loaderBg  "
          : "hidden"
      } transition-all duration-700 ease-in-out`}
    >
      <div className="w-[90%] sm:w-[75%] md:w-[65%] lg:w-[700px] p-6 bg-white rounded-md">
        <div className="w-full mx-auto py-3 flex justify-end items-center ">
          <div className="w-[90%] sm:w-[60%] flex justify-between items-center">
            <h5 className="poppin-700 text-xl capitalize">Thank You</h5>
            <button
              onClick={onClose}
              className="py-2 px-4  poppin-600 capitalize"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 30 30"
              >
                <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full pr-2 py-5 max-h-[80vh] overflow-y-auto">
          <h1 className="poppin-500">Thank you for submitting servey</h1>
          <p className="mt-2">
            Your proficiency Level is{" "}
            <span className="poppin-500">{data?.level}</span>
          </p>
          <p className="mt-2">
            We are here to help you improve your skills. For this purpose, we
            have already checked different tutorials on YouTube to find the best
            resources. Below is the URL of the tutorial where you can learn and
            improve your skills.
          </p>

          <div className="flex-grow basis-48 mt-3">
            <label
              htmlFor="url"
              className="block mb-1 pl-[2px] font-medium text-[14px] capitalize"
            >
              URL
            </label>
            <div className="flex">
              <input
                type="text"
                name="url"
                id="url"
                value={data?.url}
                ref={inputRef}
                className="border border-gray-300 outline-none text-gray-900 sm:text-sm rounded-tl-md rounded-bl-md focus:border-gray-800 block w-full px-2.5 py-2 "
                disabled={true}
              />
              <button
                className={`px-3 py-1  cursor-pointer ${
                  copied ? "bg-green-700 text-white" : "bg-black text-white"
                } poppin-500`}
                onClick={handleCopyClick}
                disabled={copied}
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          <div className="w-[92%] sm:w-[80%] md:w-[70%] flex justify-center items-center mt-4 gap-4 mx-auto">
            <button
              onClick={onClose}
              className="px-6 py-[5px] text-[16px] rounded-md poppin-600 border border-blue-900 bg-blue-900 text-white transition-all ease-in-out duration-500 hover:text-blue-900 hover:bg-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
