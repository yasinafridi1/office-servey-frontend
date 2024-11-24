import React from "react";
import ErrorText from "./ErrorText";

const Input = ({
  label,
  id,
  placeholder,
  type,
  name,
  value,
  onChange,
  onBlur,
  error,
  touch,
  styles,
}) => {
  return (
    <div style={styles} className="w-full mt-5">
      <label
        htmlFor={id}
        className={`block pl-[2px]  text-[13px] poppin-400 capitalize`}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        className="border border-gray-300 outline-none text-gray-900 sm:text-sm rounded-lg focus:border-gray-800 block w-full p-2.5 "
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && touch ? <ErrorText errorText={error} /> : null}
    </div>
  );
};

export default Input;
