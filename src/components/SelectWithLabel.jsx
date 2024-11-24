import React from "react";
import ErrorText from "./ErrorText";

const SelectWithLabel = ({
  label,
  name,
  onChange,
  options,
  value,
  touch,
  error,
  onBlur,
}) => {
  return (
    <div className="w-full flex justify-start items-start flex-col mb-2 mt-5">
      <label className={`block pl-[2px] text-[13px] poppin-400 capitalize`}>
        {label}
      </label>
      <select
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        className="border border-[--primary] outline-none text-gray-900 sm:text-sm rounded-md focus:border-[--primary-dark] block w-full p-3"
      >
        {options?.map((item, index) => (
          <option key={index} value={item.value} disabled={item.disabled}>
            {item.label}
          </option>
        ))}
      </select>
      {error && touch ? <ErrorText errorText={error} /> : null}
    </div>
  );
};

export default SelectWithLabel;
