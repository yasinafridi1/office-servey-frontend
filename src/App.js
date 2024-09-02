import { useFormik } from "formik";
import Input from "./components/Input";
import { formSchema } from "./Schema";
import {
  depenedentInputs,
  independentInputs,
  universities,
} from "./data/inputsData";
import RadioInput from "./components/RadioInput";
import Loader from "./components/Loader";
import { useState } from "react";
import Modal from "./components/Modal";
import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

function App() {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    status: false,
    data: {
      level: 1,
      youtubeURL: null,
      websiteURL: null,
    },
  });
  const initialState = {
    email: "",
    fullName: "",
    university: "",
    department: "",
    gender: "",
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

  const {
    errors,
    values,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues: initialState,
    validationSchema: formSchema,
    onSubmit: async (values) => {
      setLoading(true);
      addDoc(collection(db, "office-servey"), {
        ...values,
        created: Timestamp.now(),
      })
        .then(() => {
          handleReset();
          setModal({
            status: true,
            data: {
              level: values?.powerpoint_proficiency || 1,
              youtubeURL: process.env.REACT_APP_YOUTUBE_URL,
              websiteURL: process.env.REACT_APP_WEBSITE_URL,
            },
          });
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error adding document: ", err);
          alert("Something went wrong");
          setLoading(false);
        });
    },
  });

  return loading ? (
    <Loader />
  ) : (
    <>
      {modal.status && (
        <Modal
          open={modal.status}
          data={modal.data}
          onClose={() => {
            setModal({
              status: false,
              data: {
                level: 1,
                url: null,
              },
            });
          }}
        />
      )}
      <div className="w-full p-5 flex justify-start items-center flex-col ">
        <h1 className="poppin-700 text-2xl mt-4">
          Examination Of Digital Literacy
        </h1>
        <div className="w-[92%] sm:w-[80%] md:w-[70%] flex justify-start items-center flex-col inputShadow mt-8 p-8">
          <Input
            name="email"
            placeholder="johndoe@example.com"
            id="email"
            type="email"
            label="Email"
            value={values.email}
            touch={touched?.email}
            error={errors?.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Input
            name="fullName"
            placeholder="John Doe"
            id="fullName"
            type="text"
            label="full Name"
            value={values.fullName}
            touch={touched?.fullName}
            error={errors?.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <RadioInput
            item={universities}
            onChange={handleChange}
            error={errors?.university}
            touch={touched.university}
            value={values.university}
          />

          <Input
            name="department"
            placeholder="Computer Science Department"
            id="dep"
            type="text"
            label="Department Name"
            value={values.department}
            touch={touched?.department}
            error={errors?.department}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {independentInputs.map((inputData, index) => {
            return (
              <RadioInput
                key={index}
                item={inputData}
                onChange={handleChange}
                error={errors && errors[inputData.name]}
                touch={touched && touched[inputData.name]}
                value={values[inputData.name]}
              />
            );
          })}

          {values.officeUsed === "yes" &&
            depenedentInputs.map((inputData, index) => {
              return (
                <RadioInput
                  key={index}
                  item={inputData}
                  onChange={handleChange}
                  error={errors && errors[inputData.name]}
                  touch={touched && touched[inputData.name]}
                  value={values[inputData.name]}
                />
              );
            })}
        </div>
        <div className="w-[92%] sm:w-[80%] md:w-[70%] flex justify-end items-center mt-4 gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-[5px] text-[16px] rounded-md poppin-600 border border-red-800 bg-red-800 text-white transition-all ease-in-out duration-500 hover:text-red-800 hover:bg-white"
          >
            Clear Form
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-[5px] text-[16px] rounded-md poppin-600 border border-blue-900 bg-blue-900 text-white transition-all ease-in-out duration-500 hover:text-blue-900 hover:bg-white"
          >
            Submit Form
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
