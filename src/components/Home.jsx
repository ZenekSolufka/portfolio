import React from "react";

const Home = ({ openResume }) => {
  return (
    <div
      id="home"
      className="bg-navy flex justify-center items-center min-h-[80vh] w-full"
    >
      <div className=" flex flex-col text-left mx-auto w-full max-w-4xl mt-32 px-8">
        <div>
          <p className="font-mono text-green pb-8">Hi, my name is</p>
          <h1 className="font-calibre text-lightest-slate text-[30px] sm:text-[50px] lg:text-[70px]">
            Kacper Chełstowski.
          </h1>
          <h1 className="font-calibre text-slate text-[30px] pt-0 sm:text-[50px] lg:text-[70px]">
            Junior frontend developer.
          </h1>
          <p className="text-slate w-[100%]">
            I am a junior front-end developer specializing in creating
            exceptional digital experiences. Currently, I am focused on creating
            my own projects and developing my skills.
          </p>
          <button
            onClick={() => openResume()}
            className="cursor-pointer font-mono border-1 rounded-sm border-green text-green text-sm px-6 py-2 mt-8"
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
