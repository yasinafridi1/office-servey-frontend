import React, { useState } from "react";
import StepWelcome from "./StepWelcome";
import SelectionStep from "./SelectionStep";
import ServeyStep from "./ServeyStep";
import QuizStep from "./QuizStep";
import FInalStep from "./FInalStep";

const Steps = {
  1: StepWelcome,
  2: SelectionStep,
  3: ServeyStep,
  4: QuizStep,
  5: FInalStep,
};
const StepsWrapper = () => {
  const [step, setStep] = useState(1);
  const CurrentStep = Steps[step];

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    university: "",
    gender: "",
    department: "",
  });

  function handleNext(stepNumber) {
    setStep(stepNumber);
  }

  return (
    <div className="w-full flex justify-center items-center py-20 min-h-screen">
      <div className="w-[85%] md:w-[70%] lg:w-[60%] xl:w-1/2 bg-white p-4 rounded-md">
        <CurrentStep
          onNext={handleNext}
          stepValue={userInfo}
          setValue={setUserInfo}
        />
      </div>
    </div>
  );
};

export default StepsWrapper;
