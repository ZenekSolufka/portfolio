import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-navy flex justify-center items-center min-h-[80vh] "
    >
      <div className=" flex flex-col justify-center items-center text-center mx-auto w-[75%] max-w-4xl">
        <div>
          <p className="font-mono text-green pb-8">03. What's Next?</p>
          <h1 className="font-calibre text-lightest-slate text-[50px]">
            Get In Touch
          </h1>
          <p className="text-slate ">
            I’m currently looking for any new opportunities, my inbox is always
            open.
          </p>
          <a href="mailto:zenekch22@wp.pl">
            <button className="cursor-pointer font-mono border-1 rounded-sm border-green text-green text-sm px-6 py-2 mt-8">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
