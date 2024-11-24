function setSurveyLocal(score, level, color) {
  localStorage.setItem("score", score);
  localStorage.setItem("level", level);
  localStorage.setItem("color", color);
}

export const getServeyLocal = () => {
  const score = localStorage.getItem("score");
  const level = localStorage.getItem("level");
  const color = localStorage.getItem("color");
  return { score, level, color };
};

export const getSurveyResult = (word, powerpoint) => {
  const total = (parseInt(word) + parseInt(powerpoint)) / 2;
  if (total === 5) {
    setSurveyLocal(99, "Expert", "#347928");
  } else {
    const score = parseFloat(total * 25);
    if (score <= 20) {
      setSurveyLocal(score, "Novice", "#FF0000");
    } else if (score > 20 && score <= 40) {
      setSurveyLocal(score, "Beginner", "#914F1E");
    } else if (score > 40 && score <= 60) {
      setSurveyLocal(score, "Intermediate", "#FCCD2A");
    } else if (score > 60 && score <= 80) {
      setSurveyLocal(score, "Advance", "#D2DE32");
    } else {
      setSurveyLocal(score, "Expert", "#347928");
    }
  }
};

const correctAnswer = {
  uses_of_office: "manage_files",
  extra_app: "photoshop",
  file_format: "docx",
  list_contents: "table_of_contents",
  images_tables_charts: "yes",
  fomratting_letter: "home_tab",
  undo_shortcut: "z",
  excel_functionality: "analyze_data",
  create_graph: "insert_chart",
  sum_formula: "add",
  alphabatical: "yes",
  total_revenue: "sum_formula",
  powerpoint_purpose: "create_presentation",
  slide_feature: "animation",
  embed_videos: "yes",
  group_project: "use_animation",
  monthly_budget: "excel",
  flyer_creation: "powerpoint",
  meeting_invitation: "outlook",
};
export const getQuizResult = (data) => {
  console.log(data);
  let totalScore = 1;
  for (const key in correctAnswer) {
    // Check if the key exists in `data` and the values match
    if (data[key] === correctAnswer[key]) {
      totalScore += 1; // Increment score if the answer matches
    }
  }
  console.log(totalScore);
  const averageScore = parseInt(totalScore) / 2;
  if (averageScore === 10) {
    setSurveyLocal(99, "Expert", "#347928");
  } else {
    const score = parseFloat(averageScore * 10);
    if (score <= 20) {
      setSurveyLocal(score, "Novice", "#FF0000");
    } else if (score > 20 && score <= 40) {
      setSurveyLocal(score, "Beginner", "#914F1E");
    } else if (score > 40 && score <= 60) {
      setSurveyLocal(score, "Intermediate", "#FCCD2A");
    } else if (score > 60 && score <= 80) {
      setSurveyLocal(score, "Advance", "#D2DE32");
    } else {
      setSurveyLocal(score, "Expert", "#347928");
    }
  }
};
