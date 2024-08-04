import { useFormik } from "formik";
import Input from "./components/Input";
import { formSchema } from "./Schema";

function App() {
  const initialState = {
    email: "",
  };

  const { errors, values, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialState,
      validationSchema: formSchema,
      onSubmit: (values) => {
        console.log("Form submitted:", values);
      },
    });

  return (
    <div className="w-full p-5 flex justify-start items-center flex-col">
      <h1 className="poppin-700 text-2xl mt-4">
        Examination Of Digital Literacy
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-[92%] sm:w-[80%] md:w-[70%] flex justify-start items-center flex-col inputShadow mt-8 p-8"
      >
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
          id="Full Name"
          type="text"
          label="fullName"
          value={values.fullName}
          touch={touched?.fullName}
          error={errors?.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </form>
    </div>
  );
}

export default App;
