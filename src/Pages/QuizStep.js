import React, { useState } from "react";
import icon from "../images/quiz.svg";
import { quizInputs } from "../data/inputsData";
import SelectWithLabel from "../components/SelectWithLabel";
import { useFormik } from "formik";
import { quizSchema } from "../Schema";
import SecondaryLoader from "../components/SecondaryLoader";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
const QuizStep = ({ onNext, stepValue }) => {
  const [loading, setLoading] = useState(false);
  const initialState = {
    ...stepValue,
    uses_of_office: "",
    extra_app: "",
    file_format: "",
    list_contents: "",
    images_tables_charts: "",
    fomratting_letter: "",
    undo_shortcut: "",
    excel_functionality: "",
    create_graph: "",
    sum_formula: "",
    alphabatical: "",
    total_revenue: "",
    powerpoint_purpose: "",
    slide_feature: "",
    embed_videos: "",
    group_project: "",
    monthly_budget: "",
    flyer_creation: "",
    meeting_invitation: "",
  };
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialState,
      validationSchema: quizSchema,
      onSubmit: async (values) => {
        setLoading(true);
        addDoc(collection(db, "quiz-office"), {
          ...values,
          created: Timestamp.now(),
        })
          .then(() => {
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
          {quizInputs.map((item, index) => {
            return (
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
            );
          })}
          <div className="w-full flex justify-between items-center mt-4">
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
              Submit Quiz
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default QuizStep;
