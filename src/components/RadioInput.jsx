import React from "react";
import ErrorText from "./ErrorText";

const RadioInput = ({ item, onChange, error, touch }) => {
  return (
    <div className="w-full mt-5">
      <label
        htmlFor={item.id}
        className={`block mb-1 pl-[2px] poppin-500 text-[16px] capitalize`}
      >
        {item.label}
      </label>
      {item?.options?.map((opt, index) => {
        return (
          <div key={index} className="mt-1 flex">
            <input
              id={opt.id}
              type="radio"
              name={item?.name}
              value={opt.value}
              className="cursor-pointer"
              onChange={onChange}
            />
            <label className="text-[15px] ml-2 cursor-pointer" htmlFor={opt.id}>
              {opt.label}
            </label>
          </div>
        );
      })}
      {touch && error ? <ErrorText errorText={error} /> : null}
    </div>
  );
};

export default RadioInput;
