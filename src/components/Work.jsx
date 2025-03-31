import React from "react";
import { aivids, github, movieApp, taskFlow } from "../assets/images";

const Work = () => {
  return (
    <div
      id="work"
      className="bg-navy flex flex-col justify-center items-center min-h-[80vh]"
    >
      <div className="flex flex-col space-y-15 px-10">
        <div>
          <p className=" font-calibre flex justify-start items-center text-light-slate text-3xl space-x-3">
            <span className="text-green text-3xl pr-2">02. </span>
            Some Things I’ve Built
          </p>
        </div>
        <div className=" flex flex-col-reverse text-left items-center w-full max-w-5xl gap-10 lg:flex-row-reverse">
          <div className="flex flex-col justify-around max-w-full">
            <p className="text-green font-mono text-sm py-6 ">
              Featured project
            </p>
            <div className="flex gap-4 items-center">
              <p className="text-lightest-slate font-calibre text-3xl">
                Video Sharing App
              </p>
              <a href="https://github.com/ZenekSolufka/aivids" target="_blank">
                <img className="w-6 h-6" src={github} alt="github" />
              </a>
            </div>
            <p className="text-slate ">
              Built with React Native for seamless user experiences, Animatable
              for captivating animations, and integrated with the dependable
              backend systems of Appwrite, this app showcases impressive design
              and functionality, enabling seamless sharing of AI videos within
              the community.
            </p>
            <p className="text-slate font-calibre text-[18px] mt-5">
              Built with:
            </p>
            <div className="mt-1 flex space-x-2">
              <div className="space-y-1 ">
                <p className="text-slate font-mono tracking-[1px] text-xs">
                  <span className="text-green">▹</span> ReactNative
                </p>
                <p className="text-slate font-mono tracking-[1px] text-xs">
                  <span className="text-green">▹</span> Expo
                </p>
                <p className="text-slate font-mono tracking-[1px] text-xs">
                  <span className="text-green">▹</span> Nativewind
                </p>
              </div>
              <div className="space-y-1 ">
                <p className="text-slate font-mono tracking-[1px] text-xs">
                  <span className="text-green">▹</span> Animatable
                </p>
                <p className="text-slate font-mono tracking-[1px] text-xs">
                  <span className="text-green">▹</span> Appwrite
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <img className="object-cover" src={aivids} alt="profile" />
          </div>
        </div>
        <div className=" flex flex-col-reverse text-left items-center w-full max-w-5xl gap-10 lg:flex-row-reverse">
          <div className="flex flex-col justify-around max-w-full">
            <p className="text-green font-mono text-sm py-6 ">
              Featured project
            </p>
            <div className="flex gap-4 items-center">
              <p className="text-lightest-slate font-calibre text-3xl">
                TaskFlow - Task Management App
              </p>
              <a
                href="https://github.com/ZenekSolufka/taskflow"
                target="_blank"
              >
                <img className="w-6 h-6" src={github} alt="github" />
              </a>
            </div>
            <p className="text-slate ">
              TaskFlow is a modern task management application that combines the
              functionality of task lists with Google Calendar integration. The
              application allows users to effectively organize their work, track
              progress, and visualize data in real time.
            </p>
            <p className="text-slate font-calibre text-[18px] mt-5">
              Built with:
            </p>
            <div className="mt-1 flex gap-5 ">
              <div className="">
                <p className="text-slate font-mono tracking-[1px] text-[11px]">
                  <span className="text-green">▹</span> React
                </p>

                <p className="text-slate font-mono tracking-[1px] text-[11px]">
                  <span className="text-green">▹</span> TailwindCSS 4.0
                </p>
                <p className="text-slate font-mono tracking-[1px] text-[11px]">
                  <span className="text-green">▹</span> Google Calendar API
                </p>
              </div>
              <div className=" ">
                <p className="text-slate font-mono tracking-[1px] text-[11px]">
                  <span className="text-green">▹</span> Supabase
                </p>
                <p className="text-slate font-mono tracking-[1px] text-[11px]">
                  <span className="text-green">▹</span> Google OAuth 2.0
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <img className="object-cover " src={taskFlow} alt="profile" />
          </div>
        </div>
        <div className=" flex flex-col-reverse text-left items-center w-full max-w-5xl gap-10 lg:flex-row-reverse">
          <div className="flex flex-col justify-around max-w-full">
            <p className="text-green font-mono text-sm py-6 ">
              Featured project
            </p>
            <div className="flex gap-4 items-center">
              <p className="text-lightest-slate font-calibre text-3xl">
                Video Search App
              </p>
              <a
                href="https://github.com/ZenekSolufka/movie-app"
                target="_blank"
              >
                <img className="w-6 h-6" src={github} alt="github" />
              </a>
            </div>
            <p className="text-slate ">
              A React-based movie search application that allows users to
              discover and search for movies using The Movie Database (TMDB)
              API. The app features trending movies, search functionality, and a
              responsive design.
            </p>
            <p className="text-slate font-calibre text-[18px] mt-5">
              Built with:
            </p>
            <div className="mt-1 flex space-x-10">
              <div className="space-y-1 flex space-x-5">
                <p className="text-slate font-mono tracking-[1px] text-xs">
                  <span className="text-green">▹</span> React
                </p>
                <p className="text-slate font-mono tracking-[1px] text-xs">
                  <span className="text-green">▹</span> TMDB API
                </p>
                <p className="text-slate font-mono tracking-[1px] text-xs">
                  <span className="text-green">▹</span> Appwrite
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <img className="object-cover" src={movieApp} alt="movieApp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
