import React from "react";
import { profile } from "../assets/images";

const About = () => {
  return (
    <div
      id="about"
      className="bg-navy flex flex-col justify-center items-center min-h-[80vh] pl-5"
    >
      <div className=" flex text-left mx-auto w-full max-w-4xl space-x-10 justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full px-5">
          <p className="font-calibre flex items-center text-light-slate text-3xl space-x-3 w-full">
            <span className="text-green text-3xl">01. </span>
            About Me
            <span className="ml-4 block h-[1px] w-[35%] bg-lightest-navy"></span>
          </p>
          <p className="text-slate py-6 w-full">
            Passionate about technology and programming, I am a computer science
            student looking for my first job as a front-end developer.
          </p>
          <p className="text-slate ">
            I am a dedicated developer specializing in{" "}
            <span className="text-green">JavaScript,</span> with a focus on{" "}
            <span className="text-green">ReactJS </span> and
            <span className="text-green"> ReactNative.</span> As an aspiring
            developer,{" "}
            <span className="text-green">
              I am actively seeking a professional role
            </span>{" "}
            or
            <span className="text-green"> internship.</span> Even though I am at
            the beginning of my career, I have managed to complete several
            projects that demonstrate my skills and potential.
          </p>
          <p className="text-slate font-calibre text-[18px] mt-5">
            Here are a few technologies I’ve been working with{" "}
            <span className="text-green">recently:</span>
          </p>
          <div className="mt-1 flex space-x-5">
            <p className="text-slate text-sm font-calibre tracking-[2px]">
              <span className="text-green">▹</span> JavaScript
            </p>
            <p className="text-slate text-sm font-calibre tracking-[2px]">
              <span className="text-green">▹</span> React
            </p>
            <p className="text-slate text-sm font-calibre tracking-[2px]">
              <span className="text-green">▹</span> ReactNative
            </p>
          </div>
        </div>
        <div className="relative mx-10 border-2 border-green rounded-2xl hidden lg:block">
          <img
            className="relative z-10  rounded-2xl border-green "
            src={profile}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
