import * as Yup from "yup";

const stringValidation = (message = "Field is required") =>
  Yup.string().required(message);

const minLengthError = (str, value) => {
  return `${str} must be at least ${value} characters`;
};

const maxLengthError = (str, value) => {
  return `${str} must not exceed ${value} characters`;
};

export const formSchema = Yup.object({
  email: stringValidation("Email is required")
    .email("Email must be a valid email address")
    .max(80, maxLengthError("Email", 80))
    .min(6, minLengthError("Email", 6)),
  fullName: stringValidation("Enter your full name")
    .max(120, maxLengthError("Full name", 60))
    .min(6, minLengthError("Full name", 3)),
  university: stringValidation("Please select your institute/university name"),
  department: stringValidation("Department is required"),
  gender: stringValidation("Gender is required"),
  officeUsed: stringValidation("Field is required"),
});
