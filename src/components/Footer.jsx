import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

const Footer = ({ className, style }) => {
  const year = new Date().getFullYear();

  return (
    <div className={`bg-slate-900 p-4 ${className}`} style={{ cursor: 'default', ...style }}>
      <div className="flex justify-between flex-wrap gap-4 max-w-screen-xl mx-auto">
        <p className="text-white text-center w-full sm:w-auto font-light">
          © {year} Abhishek Doshi. All rights reserved.
        </p>
        <div className="text-white flex justify-between sm:w-[240px] w-full gap-8 px-4 sm:px-0">
          <a
            href="mailto:abhidoshi2000@gmail.com"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 hover:-translate-y-1 cursor-pointer"
            aria-label="Email me"
          >
            <FiMail className="text-lg" /> 
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-doshi-78412522b/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 hover:-translate-y-1 cursor-pointer"
            aria-label="Visit my LinkedIn profile"
          >
            <AiFillLinkedin className="text-lg" /> 
          </a>
          <a
            href="https://github.com/AbhiDoshi2000"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 hover:-translate-y-1 cursor-pointer"
            aria-label="Visit my GitHub profile"
          >
            <FaGithub className="text-lg" /> 
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;