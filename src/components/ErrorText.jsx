import React from "react";

const ErrorText = ({ errorText }) => {
  return (
    <div className="min-h-[20px]">
      <span className="text-[10px] md:text-[12px] text-red-500 ml-0 mt-1">
        {errorText}
      </span>
    </div>
  );
};

export default ErrorText;
