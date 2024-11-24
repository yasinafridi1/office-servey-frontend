import React, { useState } from "react";
import icon from "../images/icon.svg";
import { InputWelcome } from "../data/inputsData";
import SelectWithLabel from "../components/SelectWithLabel";
import Input from "../components/Input";
import { useFormik } from "formik";
import { userSchema } from "../Schema";
import SecondaryLoader from "../components/SecondaryLoader";

const StepWelcome = ({ onNext, stepValue, setValue }) => {
  const initialState = stepValue;
  const [loading, setLoading] = useState(false);

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: userSchema,
      onSubmit: (values) => {
        setValue(values);
        // setLoading(true);
        onNext(2);
      },
    });

  return (
    <>
      {loading && <SecondaryLoader />}
      <div className="w-full">
        <div className="w-full h-[150px] md:h-[200px] xl:h-[250px] flex justify-center items-start">
          <img
            className="w-[150px] md:w-[200px] xl:w-[250px] h-full"
            src={icon}
            alt="Icon here"
          />
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          {InputWelcome.map((item, index) => {
            return item.type === "select" ? (
              <SelectWithLabel
                key={index}
                label={item.label}
                options={item.options}
                onChange={handleChange}
                onBlur={handleBlur}
                name={item.name}
                value={values[item.name]}
                touch={touched[item.name]}
                error={errors[item.name]}
              />
            ) : (
              <Input
                label={item.label}
                key={index}
                placeholder={item.placeHolder}
                name={item.name}
                value={values[item.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors[item.name]}
                touch={touched[item.name]}
              />
            );
          })}

          <div className="w-full flex justify-center items-center mt-4">
            <button
              type="submit"
              className="px-6 py-[5px] text-[16px] rounded-md poppin-600 border border-blue-900 bg-blue-900 text-white transition-all ease-in-out duration-500 hover:text-blue-900 hover:bg-white"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StepWelcome;
