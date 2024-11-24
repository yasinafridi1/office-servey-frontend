import React from "react";
import icon from "../images/selection.svg";

const SelectionStep = ({ onNext }) => {
  return (
    <div className="w-full">
      <div className="w-full h-[150px] md:h-[200px] xl:h-[250px] flex justify-center items-start">
        <img
          className="w-[150px] md:w-[200px] xl:w-[250px] h-full"
          src={icon}
          alt="Icon here"
        />
      </div>
      <div className="w-full flex justify-center items-center flex-col border-t py-3">
        <button
          onClick={() => {
            onNext(3);
          }}
          type="submit"
          className="px-6 py-[5px] text-[16px] rounded-md poppin-600 border border-blue-900 bg-blue-900 text-white transition-all ease-in-out duration-500 hover:text-blue-900 hover:bg-white"
        >
          Submit Survey
        </button>
        <p className="my-2 poppin-500 ">or</p>
        <button
          onClick={() => {
            onNext(4);
          }}
          type="submit"
          className="px-6 py-[5px] text-[16px] rounded-md poppin-600 border border-blue-900 bg-blue-900 text-white transition-all ease-in-out duration-500 hover:text-blue-900 hover:bg-white"
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

export default SelectionStep;
