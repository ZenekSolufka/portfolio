import React from "react";

const Navbar = ({ openResume, scrollToSection }) => {
  return (
    <div className="fixed top-0 left-0 w-full  shadow-xl z-20 bg-navy">
      <div className="flex justify-between items-center px-4 py-5 sm:px-10">
        <div
          onClick={() => scrollToSection("home")}
          className="cursor-pointer border-2 border-green rounded-full px-5.5 py-1 w-[36px] flex justify-center items-center"
        >
          <div>
            <p className="text-green text-3xl ">K</p>
          </div>
        </div>
        <div className="flex gap-8 justify-center items-center">
          <ul className="flex gap-8">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="cursor-pointer text-green font-mono flex gap-1 text-sm"
              >
                01.<p className="text-slate">About</p>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("work")}
                className="cursor-pointer text-green font-mono flex gap-1 text-sm"
              >
                02.<p className="text-slate">Work</p>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="cursor-pointer text-green font-mono flex gap-1 text-sm"
              >
                03.<p className="text-slate">Contact</p>
              </button>
            </li>
          </ul>
          <button
            onClick={() => openResume()}
            className="cursor-pointer text-sm border-1 border-green rounded-sm text-green px-5 py-1.5 hidden sm:block"
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
