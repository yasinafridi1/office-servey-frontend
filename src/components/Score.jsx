import React from "react";

const Score = ({ score, level, color }) => {
  return (
    <div
      className="w-[150px] h-[150px] rounded-full flex justify-center items-center"
      style={{
        background: `conic-gradient(${color} ${score}%, #e5e7eb ${score}%)`, // Dynamic gradient
      }}
    >
      <div className="w-[120px] h-[120px] rounded-full bg-white flex justify-center items-center flex-col">
        <h1 className="poppin-700 text-3xl">{score}%</h1>
        <h4 className="poppin-500 text-base">{level}</h4>
      </div>
    </div>
  );
};

export default Score;
