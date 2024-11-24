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

export const serveySchema = Yup.object({
  officeUsed: stringValidation("Field is required"),
  word_comfortability: stringValidation("Field is required"),
  powerpoint_proficiency: stringValidation("Field is required"),
  excel_usage: stringValidation("Field is required"),
  access_used_for_db: stringValidation("Field is required"),
  macros_pivot_mail_merge: stringValidation("Field is required"),
  formal_training: stringValidation("Field is required"),
  usage_duration_devices_used: stringValidation("Field is required"),
  alternative: stringValidation("Field is required"),
  faced_challenges: stringValidation("Field is required"),
  literacy_skills: stringValidation("Field is required"),
  attending_workshop: stringValidation("Field is required"),
  basic_formatting: stringValidation("Field is required"),
  access_manage_informations: stringValidation("Field is required"),
  leverage_digital_skill: stringValidation("Field is required"),
  word_advance_feature: stringValidation("Field is required"),
  office_proficience_impact: stringValidation("Field is required"),
  resource_seeking: stringValidation("Field is required"),
});

export const userSchema = Yup.object({
  email: stringValidation("Email is required")
    .email("Email must be a valid email address")
    .max(80, maxLengthError("Email", 80))
    .min(6, minLengthError("Email", 6)),
  fullName: stringValidation("Enter your full name")
    .max(120, maxLengthError("Full name", 60))
    .min(3, minLengthError("Full name", 3)),
  university: stringValidation("Please select your institute/university name"),
  department: stringValidation("Department is required"),
  gender: stringValidation("Gender is required"),
});

export const quizSchema = Yup.object({
  uses_of_office: stringValidation("Field is required"),
  extra_app: stringValidation("Field is required"),
  file_format: stringValidation("Field is required"),
  list_contents: stringValidation("Field is required"),
  images_tables_charts: stringValidation("Field is required"),
  fomratting_letter: stringValidation("Field is required"),
  undo_shortcut: stringValidation("Field is required"),
  excel_functionality: stringValidation("Field is required"),
  create_graph: stringValidation("Field is required"),
  sum_formula: stringValidation("Field is required"),
  alphabatical: stringValidation("Field is required"),
  total_revenue: stringValidation("Field is required"),
  powerpoint_purpose: stringValidation("Field is required"),
  slide_feature: stringValidation("Field is required"),
  embed_videos: stringValidation("Field is required"),
  group_project: stringValidation("Field is required"),
  monthly_budget: stringValidation("Field is required"),
  flyer_creation: stringValidation("Field is required"),
  meeting_invitation: stringValidation("Field is required"),
});
