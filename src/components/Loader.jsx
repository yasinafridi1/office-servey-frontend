import React from "react";

const Loader = () => {
  return (
    <section className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center loaderBg z-10">
      <div className="flex justify-center items-center gap-4 w-[90%] h-full">
        <div className="box box1"></div>
        <div className="box box2"></div>
        <div className="box box3"></div>
        <div className="box box4"></div>
        <div className="box box5"></div>
      </div>
    </section>
  );
};

export default Loader;
