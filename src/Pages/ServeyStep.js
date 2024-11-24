import React, { useState } from "react";
import icon from "../images/servey.svg";
import { InputsServey } from "../data/inputsData";
import SelectWithLabel from "../components/SelectWithLabel";
import { useFormik } from "formik";
import { serveySchema } from "../Schema";
import SecondaryLoader from "../components/SecondaryLoader";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { getSurveyResult } from "../utils/ScoreCount";
const ServeyStep = ({ onNext, stepValue }) => {
  const [loading, setLoading] = useState(false);
  const initialState = {
    ...stepValue,
    officeUsed: "",
    word_comfortability: "",
    powerpoint_proficiency: "",
    excel_usage: "",
    access_used_for_db: "",
    macros_pivot_mail_merge: "",
    formal_training: "",
    usage_duration_devices_used: "",
    alternative: "",
    faced_challenges: "",
    literacy_skills: "",
    attending_workshop: "",
    basic_formatting: "",
    access_manage_informations: "",
    leverage_digital_skill: "",
    word_advance_feature: "",
    office_proficience_impact: "",
    resource_seeking: "",
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: initialState,
      validationSchema: serveySchema,
      onSubmit: async (values) => {
        setLoading(true);
        addDoc(collection(db, "office-servey"), {
          ...values,
          created: Timestamp.now(),
        })
          .then(() => {
            getSurveyResult(
              values.word_comfortability,
              values.powerpoint_proficiency
            );
            setLoading(false);
            onNext(5);
          })
          .catch((err) => {
            console.error("Error adding document: ", err);
            alert("Something went wrong");
            setLoading(false);
          });
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
          {InputsServey.map((item, index) => {
            return (
              <SelectWithLabel
                key={index}
                name={item.name}
                value={values[item.name]}
                error={errors[item.name]}
                touch={touched[item.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                label={item.label}
                options={[
                  { value: "", label: "Please choose an option" },
                  ...item.options,
                ]}
              />
            );
          })}
          <div className="w-full flex justify-between items-center mt-4 gap-4">
            <button
              type="button"
              onClick={() => {
                onNext(2);
              }}
              className="px-6 py-[5px] text-[16px] rounded-md poppin-600 border border-blue-900  text-blue-900 transition-all ease-in-out duration-500 hover:text-white hover:bg-blue-900"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-6 py-[5px] text-[16px] rounded-md poppin-600 border border-blue-900 bg-blue-900 text-white transition-all ease-in-out duration-500 hover:text-blue-900 hover:bg-white"
            >
              Submit Servey
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ServeyStep;
