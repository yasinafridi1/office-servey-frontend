export const universities = {
  // leave only universities listed in excel file
  // decide level base on proficiency
  name: "university",
  id: "uni",
  label: "University/College",
};

export const independentInputs = [];

export const depenedentInputs = [];

export const InputWelcome = [
  {
    name: "fullName",
    type: "text",
    placeHolder: "Enter Full Name",
    label: "Full Name",
    id: "fullName",
  },
  {
    name: "email",
    type: "email",
    placeHolder: "Enter your email address",
    label: "Email Address",
    id: "email",
  },
  {
    name: "university",
    type: "select",
    label: "University/ Institute",
    id: "university",
    options: [
      {
        value: "",
        label: "Please select a University",
      },
      {
        value: "CECOS",
        label: "CECOS University",
        id: "cecos",
      },
      {
        value: "City University Peshawar",
        label: "City University Peshawar ",
        id: "cusit",
      },
      {
        value: "Frontier Institute of Medical Sciences, Abbottabad",
        label: "Frontier Institute of Medical Sciences, Abbottabad",
        id: "fiomsa",
      },
      {
        value: "Frontier Institute of Medical Sciences, Abbottabad",
        label: "Frontier Institute of Medical Sciences, Abbottabad",
        id: "fiomsa",
      },
      {
        value: "Iqra National University, Swat",
        label: "Iqra National University, Swat",
        id: "inus",
      },
      {
        value: "Northern University, Nowshera",
        label: "Northern University, Nowshera",
        id: "nun",
      },
      {
        value: "Preston University, Kohat",
        label: "Preston University, Kohat",
        id: "pres",
      },
      {
        value: "Qurtuba University Peshawar",
        label: "Qurtuba University Peshawar",
        id: "qup",
      },
      {
        value: "Hazara University Mansehra",
        label: "Hazara University Mansehra",
        id: "hum",
      },
      {
        value: "GDC Lower Chitral",
        label: "GDC Lower Chitral",
        id: "gdclc",
      },
      {
        value: "Government Frontier College / University For Women Peshawar",
        label: "Government Frontier College / University For Women Peshawar",
        id: "gfc",
      },
      {
        value: "Karakoram International University, Gilgit-Baltistan",
        label: "Karakoram International University, Gilgit-Baltistan",
        id: "kiugb",
      },
      {
        value: "University of Peshawar",
        label: "University of Peshawar ",
        id: "up",
      },
      {
        value: "University of Haripur",
        label: "University of Haripur ",
        id: "uh",
      },
      {
        value: "Women University, Swabi",
        label: "Women University, Swabi",
        id: "wus",
      },
    ],
  },
  {
    name: "department",
    type: "text",
    placeHolder: "Enter your department",
    label: "Dpartment",
    id: "department",
  },
  {
    name: "gender",
    type: "select",
    label: "Gender",
    id: "gender",
    options: [
      {
        value: "",
        label: "Please choose an option",
      },
      {
        value: "male",
        label: "Male",
      },
      {
        value: "female",
        label: "Female",
      },
    ],
  },
];

export const InputsServey = [
  {
    name: "officeUsed",
    id: "usage",
    label: "Have you used Microsoft Office application before?",
    options: [
      {
        value: "yes",
        label: "Yes",
        id: "yes",
      },
      {
        value: "no",
        label: "No",
        id: "no",
      },
    ],
  },
  {
    name: "word_comfortability",
    id: "word_comfortability",
    label:
      "On a scale of 1 to 5, how comfortable are you with using Microsoft Word for creating and editing documents?",
    options: [
      {
        value: "1",
        label: "1",
        id: "n",
      },
      {
        value: "2",
        label: "2",
        id: "b",
      },
      {
        value: "3",
        label: "3",
        id: "i",
      },
      {
        value: "4",
        label: "4",
        id: "e",
      },
      {
        value: "5",
        label: "5",
        id: "d",
      },
    ],
  },

  // power point related questions
  {
    name: "powerpoint_proficiency",
    id: "powerpoint_proficiency",
    label:
      "What is your proficiency level in using Microsoft PowerPoint for creating presentations?",
    options: [
      {
        value: "1",
        label: "1 ( Novice )",
        id: "n",
      },
      {
        value: "2",
        label: "2 ( Beginner )",
        id: "b",
      },
      {
        value: "3",
        label: "3 ( Intermediate )",
        id: "i",
      },
      {
        value: "4",
        label: "4 ( Advance )",
        id: "ehas7",
      },
      {
        value: "5",
        label: "5 ( Expert )",
        id: "e8jd",
      },
    ],
  },

  {
    name: "excel_usage",
    id: "kkkas23",
    label:
      "How often do you use Microsoft Excel for data analysis and calculations?",
    options: [
      {
        value: "daily",
        label: "Daily",
        id: "nuuu67",
      },
      {
        value: "weekly",
        label: "Weekly",
        id: "baaddvgh",
      },
      {
        value: "monthly",
        label: "monthly",
        id: "moijn",
      },
      {
        value: "never",
        label: "Never",
        id: "eeerrr",
      },
    ],
  },
  {
    name: "access_used_for_db",
    id: "accss",
    label:
      "Have you used Microsoft Access for database management or creating simple databases?",
    options: [
      {
        value: "yes",
        label: "Yes",
        id: "a6a",
      },
      {
        value: "no",
        label: "No",
        id: "askjak",
      },
    ],
  },
  {
    name: "macros_pivot_mail_merge",
    id: "ha78",
    label:
      "Do you know how to use the advanced features of Microsoft Office applications ? ",
    options: [
      {
        value: "yes",
        label: "Yes",
        id: "na12",
      },
      {
        value: "no",
        label: "No",
        id: "b7jk",
      },
    ],
  },
  {
    name: "formal_training",
    id: "ja90",
    label:
      "Have you received any formal training or taken courses on Microsoft Office applications?",
    options: [
      {
        value: "yes",
        label: "Yes",
        id: "n1ksaw",
      },
      {
        value: "no",
        label: "No",
        id: "b6saj",
      },
    ],
  },
  {
    name: "usage_duration_devices_used",
    id: "nhau23",
    label:
      "How often do you use Microsoft Office applications on different devices (e.g., desktop, laptop, tablet, smartphone)?",
    options: [
      {
        value: "daily",
        label: "Daily",
        id: "n090",
      },
      {
        value: "weekly",
        label: "Once a week",
        id: "b456a",
      },
      {
        value: "occasionally",
        label: "Occasionally (few times a month)",
        id: "i29sja",
      },
      {
        value: "never",
        label: "Never",
        id: "e78a",
      },
    ],
  },
  {
    name: "alternative",
    id: "bs90",
    label:
      "Are you aware of alternative software or platforms that serve similar purposes as Microsoft Office applications?",
    options: [
      {
        value: "yes",
        label: "Yes",
        id: "n24axf",
      },
      {
        value: "no",
        label: "No",
        id: "b456",
      },
    ],
  },
  {
    name: "faced_challenges",
    id: "jki9",
    label:
      "What challenges do you face when using Microsoft Office applications, if any?",
    options: [
      {
        value: "Difficulty learning new features/tools",
        label: "Difficulty learning new features/tools",
        id: "nkl89",
      },
      {
        value: "Compatibility issues with other software",
        label: "Compatibility issues with other software",
        id: "bft7",
      },
      {
        value: "Performance/speed issues",
        label: "Performance/speed issues",
        id: "ibn7",
      },
      {
        value: "User interface/navigation challenges",
        label: "User interface/navigation challenges",
        id: "evc6",
      },
      {
        value: "Lack of advanced skills/training",
        label: "Lack of advanced skills/training",
        id: "dnm78",
      },
      {
        value: "other",
        label: "Other",
        id: "dcd34",
      },
    ],
  },
  {
    name: "literacy_skills",
    id: "ka4561",
    label:
      "How important do you think digital literacy skills, including proficiency in Microsoft Office, are for academic and professional success?",
    options: [
      {
        label: "Extremely important",
        value: "Extremely important",
        id: "nqa6",
      },
      {
        label: "Very important",
        value: "Very important",
        id: "b9gah",
      },
      {
        label: "Slightly important",
        value: "Slightly important",
        id: "i623da",
      },
      {
        label: "Not important",
        value: "Not important",
        id: "e067a",
      },
    ],
  },
  {
    name: "attending_workshop",
    id: "hjkas77",
    label:
      "Would you be interested in attending workshops or training sessions to improve your skills in using Microsoft Office applications?",
    options: [
      {
        value: "yes",
        label: "Yes",
        id: "nbna1",
      },
      {
        value: "no",
        label: "No",
        id: "bfa56",
      },
    ],
  },
  {
    name: "basic_formatting",
    id: "sa134",
    label:
      "Are you comfortable with basic formatting tasks in Microsoft Word (e.g., bold, italics, alignment)?",
    options: [
      {
        value: "yes",
        label: "Yes",
        id: "nlaw3",
      },
      {
        value: "no",
        label: "No",
        id: "bbui2",
      },
    ],
  },
  {
    name: "access_manage_informations",
    id: "aa68",
    label:
      "Have you used Microsoft Access to create a basic database or manage information?",
    options: [
      {
        value: "yes",
        label: "Yes",
        id: "nnnasd",
      },
      {
        value: "no",
        label: "No",
        id: "baa567",
      },
    ],
  },
  {
    name: "leverage_digital_skill",
    id: "lds67",
    label:
      "How often do you leverage digital tools, including Microsoft Office, to conduct research or academic projects?",
    options: [
      {
        value: "daily",
        label: "Daily",
        id: "nio34",
      },
      {
        value: "weekly",
        label: "Once a week",
        id: "bbba56",
      },
      {
        value: "monthly",
        label: "Occasionally (a few times a month)",
        id: "ihhha12",
      },
      {
        value: "4",
        label: "Never",
        id: "elioo",
      },
    ],
  },
  {
    name: "word_advance_feature",
    id: "waf23",
    label:
      "Have you explored advanced features within Microsoft Office applications, such as data visualization tools in Excel or multimedia integration in PowerPoint, to enhance your research presentations?",
    options: [
      {
        value:
          "Yes, I frequently use advanced features in Microsoft Office applications",
        label:
          "Yes, I frequently use advanced features in Microsoft Office applications.",
        id: "njjj78",
      },
      {
        value: "Yes, I have used some advanced features occasionally",
        label: "Yes, I have used some advanced features occasionally.",
        id: "badddd",
      },
      {
        value:
          "No, I have not explored advanced features in Microsoft Office applications",
        label:
          "No, I have not explored advanced features in Microsoft Office applications",
        id: "ihhh799",
      },
    ],
  },
  {
    name: "office_proficience_impact",
    id: "",
    label:
      "In your experience, how has proficiency in Microsoft Office positively impacted your ability to collaborate with peers on digital platforms like Teams or OneDrive for group projects?",
    options: [
      {
        value: "daily",
        label: "Daily",
        id: "nhhh11189",
      },
      {
        value: "weekly",
        label: "Once a week",
        id: "bttt88",
      },
      {
        value: "monthly",
        label: "Occasionally (a few times a month)",
        id: "i00000",
      },
      {
        value: "never",
        label: "Never",
        id: "ennnnaas",
      },
    ],
  },
  {
    name: "resource_seeking",
    id: "asa12",
    label:
      "Do you actively seek out online resources or tutorials to expand your digital skills related to Microsoft Office and other technology tools used for academic purposes?",
    options: [
      {
        value: "yes",
        label: "Yes",
        id: "nlllaas",
      },
      {
        value: "no",
        label: "No",
        id: "aadf34df",
      },
    ],
  },
];

export const quizInputs = [
  {
    id: "",
    name: "uses_of_office",
    label: "What is Microsoft Office primarily used for?",
    type: "select",
    options: [
      {
        value: "",
        label: "Please choose an option",
      },
      {
        value: "browsing_internet",
        label: "Browsing the internet",
      },
      {
        value: "manage_files",
        label: "Managing files, creating documents, and presentations",
      },
      {
        value: "editing",
        label: "Editing photos",
      },
      {
        value: "playing_games",
        label: "Playing games",
      },
    ],
  },
  {
    id: "",
    name: "extra_app",
    label: "Which of these applications is NOT part of Microsoft Office?",
    type: "select",
    options: [
      {
        value: "",
        label: "Please choose an option",
      },
      {
        value: "word",
        label: "Microsoft Word",
      },
      {
        value: "excel",
        label: "Microsoft Excel",
      },
      {
        value: "powerpoint",
        label: "Microsoft PowerPoint",
      },
      {
        value: "photoshop",
        label: "Microsoft Photoshop",
      },
    ],
  },
  {
    id: "",
    name: "file_format",
    label: "What is the default file format for a Word document?",
    type: "select",
    options: [
      {
        value: "",
        label: "Please choose an option",
      },
      {
        value: "pdf",
        label: ".pdf",
      },
      {
        value: "docx",
        label: ".docx",
      },
      {
        value: "xlsx",
        label: ".xlsx",
      },
      {
        value: "pptx",
        label: ".pptx",
      },
    ],
  },
  {
    id: "",
    name: "list_contents",
    label:
      "Which of these features in Word is used to automatically create a list of contents?",
    type: "select",
    options: [
      {
        value: "",
        label: "Please choose an option",
      },
      {
        value: "header_footer",
        label: " Header and Footer",
      },
      {
        value: "table_of_contents",
        label: " Table of Contents",
      },
      {
        value: "page_layout",
        label: " Page Layout",
      },
      {
        value: "refrences",
        label: "References",
      },
    ],
  },
  {
    id: "",
    name: "images_tables_charts",
    label: "You can add images, tables, and charts in a Word document.",
    type: "select",
    options: [
      {
        value: "",
        label: "Please choose an option",
      },
      {
        value: "yes",
        label: "True",
      },
      {
        value: "no",
        label: "False",
      },
    ],
  },
  {
    id: "",
    name: "fomratting_letter",
    label:
      " You are asked to create a formal letter. What steps will you follow in Word to ensure proper formatting (e.g., alignment, spacing, and font style)?",
    type: "select",
    options: [
      {
        value: "",
        label: "Please choose an option",
      },
      {
        value: "home_tab",
        label:
          " Use the Home tab to select appropriate font style, size, and alignment, and adjust spacing using the Paragraph settings.",
      },
      {
        value: "insert_table",
        label: "Insert a Table and adjust its borders for formatting.",
      },
      {
        value: "page_layout",
        label: " Use Page Layout to insert a watermark and set margins.",
      },
      {
        value: "without_formatting",
        label: " Save the document as a template without formatting.",
      },
    ],
  },
  {
    id: "",
    name: "undo_shortcut",
    label: "Which shortcut can be used to undo the last action in Word?",
    type: "select",
    options: [
      {
        value: "",
        label: "Please choose an option",
      },
      {
        value: "s",
        label: " Ctrl + S",
      },
      {
        value: "z",
        label: " Ctrl + Z",
      },
      {
        value: "p",
        label: " Ctrl + P",
      },
      {
        value: "y",
        label: " Ctrl + Y",
      },
    ],
  },
  {
    id: "",
    name: "excel_functionality",
    label: "What is the primary function of Excel?",
    type: "select",
    options: [
      {
        value: "",
        label: "Please choose an option",
      },
      {
        value: "create_presentation",
        label: "To create presentations",
      },
      {
        value: "analyze_data",
        label: "To organize and analyze data in spreadsheets",
      },
      {
        value: "write_essay",
        label: "To write essays and reports",
      },
      {
        value: "browse_internet",
        label: "To browse the internet",
      },
    ],
  },
  {
    id: "",
    name: "create_graph",
    label: "Which feature in Excel allows you to create a graph or chart?",
    type: "select",
    options: [
      {
        value: "",
        label: "Please choose an option",
      },
      {
        value: "pivot_table",
        label: "Pivot Table",
      },
      {
        value: "data_filter",
        label: "Data Filter",
      },
      {
        value: "insert_chart",
        label: " Insert Chart",
      },
      {
        value: "conditional_formatting",
        label: " Conditional Formatting",
      },
    ],
  },
  {
    id: "",
    name: "sum_formula",
    label: "What does the formula =SUM(A1:A5) do?",
    type: "select",
    options: [
      {
        value: "",
        label: "Please choose an option",
      },
      {
        value: "add",
        label: " Adds the values in cells A1 to A5",
      },
      {
        value: "find",
        label: " Finds the highest value in cells A1 to A5",
      },
      {
        value: "count",
        label: " Counts the number of cells in A1 to A5",
      },
      {
        value: "subtract",
        label: "Subtracts the values in A1 from A5",
      },
    ],
  },
  {
    id: "",
    name: "alphabatical",
    label: "Excel can sort data alphabetically or numerically.",
    type: "select",
    options: [
      {
        value: "",
        label: "Please choose an option",
      },
      {
        value: "yes",
        label: "True",
      },
      {
        value: "no",
        label: "False",
      },
    ],
  },
  {
    id: "",
    name: "total_revenue",
    label:
      " You have a sales report in Excel. How would you calculate the total revenue and represent it graphically? Explain briefly.",
    type: "select",
    options: [
      {
        value: "",
        label: "Please choose an option",
      },
      {
        value: "sum_formula",
        label:
          " Use the SUM formula to add the revenue values in the report, then use the Insert Chart option to create a graph that represents the total revenue over time.",
      },
      {
        value: "average_formula",
        label:
          " Use the AVERAGE formula to calculate the total revenue, then create a table to represent it.",
      },
      {
        value: "count_formula",
        label:
          "Use the COUNT formula to calculate the total revenue, then insert a line chart.",
      },
      {
        value: "if_condition",
        label:
          "Use the IF function to calculate the total revenue based on conditions, then create a bar graph.",
      },
    ],
  },
  {
    id: "",
    name: "powerpoint_purpose",
    label: "What is the main purpose of PowerPoint?",
    type: "select",
    options: [
      {
        value: "",
        label: "Please choose an option",
      },
      {
        value: "create_spreadsheet",
        label: "To create spreadsheets",
      },
      {
        value: "manage_email",
        label: " To manage emails",
      },
      {
        value: "create_presentation",
        label: "To create and deliver presentations",
      },
      {
        value: "edit_images",
        label: "To edit images",
      },
    ],
  },
  {
    id: "",
    name: "slide_feature",
    label: "Which feature adds movement to objects on a slide?",
    type: "select",
    options: [
      {
        value: "",
        label: "Please choose an option",
      },
      {
        value: "layout",
        label: " Layout",
      },
      {
        value: "transition",
        label: " Transition",
      },
      {
        value: "animation",
        label: "Animation",
      },
      {
        value: "format",
        label: " Format",
      },
    ],
  },
  {
    id: "",
    name: "embed_videos",
    label: "You can embed videos and charts into PowerPoint slides.",
    type: "select",
    options: [
      {
        value: "",
        label: "Please choose an option",
      },
      {
        value: "yes",
        label: "True",
      },
      {
        value: "no",
        label: "False",
      },
    ],
  },
  {
    id: "",
    name: "group_project",
    label:
      "You need to create a presentation for a group project. List three features in PowerPoint you would use to make the presentation engaging and professional.",
    type: "select",
    options: [
      {
        value: "",
        label: "Please choose an option",
      },
      {
        value: "use_animation",
        label:
          " Use Animations for object movement, apply consistent Slide Layouts, and add Transition effects between slides.",
      },
      {
        value: "insert_table",
        label:
          " Use the Insert Table feature, apply themes, and use the Spell Check tool.",
      },
      {
        value: "apply_background",
        label:
          " Apply Background Colors, use Text Boxes for emphasis, and insert SmartArt.",
      },
      {
        value: "insert_charts",
        label: " Insert Charts, add sounds, and set automatic slide timings.",
      },
    ],
  },
  {
    id: "",
    name: "monthly_budget",
    label:
      " You are tasked to create a monthly budget. Which Microsoft Office application would you use and why?",
    type: "select",
    options: [
      {
        value: "",
        label: "Please choose an option",
      },
      {
        value: "word",
        label:
          " Microsoft Word, because it allows you to create tables for the budget.",
      },
      {
        value: "excel",
        label:
          " Microsoft Excel, because it is designed for organizing and analyzing data in spreadsheets, ideal for creating a budget.",
      },
      {
        value: "powerpoint",
        label:
          " Microsoft PowerPoint, because it can help present the budget visually in slides.",
      },
      {
        value: "outlook",
        label:
          " Microsoft Outlook, because it helps with scheduling budget-related meetings.",
      },
    ],
  },
  {
    id: "",
    name: "flyer_creation",
    label:
      "You have to create a flyer for an event. Which Microsoft Office application is best suited for this task? Explain why.",
    type: "select",
    options: [
      {
        value: "",
        label: "Please choose an option",
      },
      {
        value: "word",
        label:
          "Microsoft Word, because it allows you to create simple flyers with text and images.",
      },
      {
        value: "excel",
        label:
          "Microsoft Excel, because it can organize event details and create a table format for the flyer.",
      },
      {
        value: "powerpoint",
        label:
          " Microsoft PowerPoint, because it allows for creative design with various text, image, and shape formatting.",
      },
      {
        value: "outlook",
        label:
          "Microsoft Outlook, because it helps in sending the flyer via email but doesn’t support design.",
      },
    ],
  },
  {
    id: "",
    name: "meeting_invitation",
    label:
      "You want to email a meeting invitation to your team members. Which Microsoft Office application will you use, and what features would you use in the email?",
    type: "select",
    options: [
      {
        value: "",
        label: "Please choose an option",
      },
      {
        value: "word",
        label:
          "Microsoft Word, because it allows you to create a formal invitation, which you can then email as an attachment.",
      },
      {
        value: "excel",
        label:
          " Microsoft Excel, because it helps organize meeting details, but it’s not ideal for sending an invitation.",
      },
      {
        value: "powerpoint",
        label:
          " Microsoft PowerPoint, because it allows you to create a detailed, visually appealing email.",
      },
      {
        value: "outlook",
        label:
          "Microsoft Outlook, because it allows you to create and send meeting invitations with calendar integration and reminder features.",
      },
    ],
  },
];
