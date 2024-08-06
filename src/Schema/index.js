import * as Yup from "yup";

const stringValidation = (message = "Field is required") =>
  Yup.string().required(message);

const minLengthError = (str, value) => {
  return `${str} must be at least ${value} characters`;
};

const maxLengthError = (str, value) => {
  return `${str} must not exceed ${value} characters`;
};

const conditionalStringValidation = () => {
  return Yup.string().when("officeUsed", {
    is: (val) => {
      return val === "yes";
    },
    then: (s) => s.required("Field is required"),
    otherwise: (s) => s.nullable(),
  });
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
  word_comfortability: conditionalStringValidation(),
  powerpoint_proficiency: conditionalStringValidation(),
  excel_usage: conditionalStringValidation(),
  access_used_for_db: conditionalStringValidation(),
  macros_pivot_mail_merge: conditionalStringValidation(),
  formal_training: conditionalStringValidation(),
  usage_duration_devices_used: conditionalStringValidation(),
  alternative: conditionalStringValidation(),
  faced_challenges: conditionalStringValidation(),
  literacy_skills: conditionalStringValidation(),
  attending_workshop: conditionalStringValidation(),
  basic_formatting: conditionalStringValidation(),
  access_manage_informations: conditionalStringValidation(),
  leverage_digital_skill: conditionalStringValidation(),
  word_advance_feature: conditionalStringValidation(),
  office_proficience_impact: conditionalStringValidation(),
  resource_seeking: conditionalStringValidation(),
});
