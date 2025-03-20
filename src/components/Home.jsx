import React, { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import { motion } from 'framer-motion';

const Home = () => {
  const ref = useRef(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        ref.current++;
        setText((prev) => prev + name[ref.current - 1]);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="relative z-0 bg-black w-full min-h-screen">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div
        className="relative flex justify-center items-center text-white min-h-screen"
        id="hero"
      >
        <div className="pt-4 h-36 backdrop-blur-sm rounded-3xl text-center">
          <h1 className="text-6xl sm:text-7xl font-extrabold mt-2">
            Hi, I'm <span className="text-yellow-200 font-extrabold">{text}</span>
          </h1>
          <p className="mt-3 text-xl">
            I love to learn and build scalable and optimized backend systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;