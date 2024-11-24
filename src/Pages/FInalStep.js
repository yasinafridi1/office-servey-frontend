import React from "react";
import youtube from "../images/1.jpg";
import website from "../images/2.jpg";
import Score from "../components/Score";
import { getServeyLocal } from "../utils/ScoreCount";

const FinalStep = () => {
  const { score, level, color } = getServeyLocal();
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="w-full flex justify-center items-center mb-3">
        <Score
          score={score || 5}
          level={level || "Novice"}
          color={color || "#FF0000"}
        />
      </div>
      <div className="w-[300px] md:w-[350px] xl:w-[450px] text-center">
        <h1 className="poppin-700 text-2xl">Recommendation for improvements</h1>
      </div>
      <div className="flex justify-center items-center gap-3 flex-wrap mt-7">
        <a
          target="_blank"
          href={process.env.REACT_APP_YOUTUBE_URL}
          className="w-full md:w-[250px] max-w-[450px] flex justify-center items-center flex-col"
        >
          <img
            className="w-full h-full rounded-md"
            src={youtube}
            alt="Youtube icon"
          />
          <h3 className="poppin-500 text-base mt-3">Youtube Toturial</h3>
        </a>
        <a
          target="_blank"
          href={process.env.REACT_APP_WEBSITE_URL}
          className="w-full sm:w-[250px] max-w-[450px] flex justify-center items-center flex-col"
        >
          <img
            className="w-full h-full rounded-md"
            src={website}
            alt="website icon"
          />
          <h3 className="poppin-500 text-base mt-3">Website Toturial</h3>
        </a>
      </div>
      <div className="w-[80%]">
        <p className="poppin-500 text-[13px] md:text-[14px] xl:text-[15px] text-gray-500 text-center mt-4">
          Don't worry! with some more learning and practice, you'll improve your
          Microsoft Office skills in one time!
        </p>
      </div>
    </div>
  );
};

export default FinalStep;
