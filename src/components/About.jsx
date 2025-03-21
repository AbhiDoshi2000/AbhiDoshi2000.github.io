import React from 'react';
import '../index.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}
      >
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="bg-black min-h-screen w-full text-white">
      <div
        className='sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden'
        id='about'
      >
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>
              Introduction
            </h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              Hello! I'm Abhishek Doshi, a recent Master's graduate from the
              University of Texas at Arlington, class of 2024, and a dedicated{' '}
              <a
                className='text-green-300 hover:text-green-500 duration-300'
                href='https://www.linkedin.com/in/abhishek-doshi-78412522b/'
                target='_blank'
              >
                Software developer
              </a>
              . I have a passion for creating innovative software solutions and
              thrive on challenges that push my limits and allow me to
              continuously grow and evolve in my field.
              <br />
              I specialize in full-stack development, and I'm particularly
              passionate about creating seamless user experiences and efficient
              backend systems. My work involves designing and developing web
              applications, optimizing performance, and ensuring scalability.
            </p>

            <ButtonLink
              url='https://drive.google.com/file/d/15gOCEmzmiBwUpmSXJmtG5copnCe60rFh/view?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />
          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;