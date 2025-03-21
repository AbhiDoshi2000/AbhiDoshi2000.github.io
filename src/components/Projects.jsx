import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import CollabEd from '../assets/CollabEd.png';
import Travel from '../assets/Travel.png';
import Car from '../assets/Car.png';
import Carousel from 'react-spring-3d-carousel';

// Custom Arrow Components for Navigation
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition-all duration-300 z-10"
  >
    →
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-3rem] top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition-all duration-300 z-10"
  >
    ←
  </button>
);

const ProjectCard = ({ image, title, description, technologies }) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.05}
      transitionSpeed={300}
      className="parallax-tilt"
    >
      <div className="max-w-sm bg-gray-900 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <a href="#">
          <img
            className="w-full h-48 object-cover rounded-t-lg"
            src={image}
            alt={title}
          />
        </a>
        <div className="p-6">
          <a href="#">
            <h5 className="text-2xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
              {title}
            </h5>
          </a>
          <p className="mt-2 font-normal text-gray-300 text-base">
            {description}
          </p>
        </div>
        <div className="m-6">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tag, index) => (
              <p key={`${index}-${tag}`} className="text-sm text-blue-400">
                #{tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Tilt>
  );
};

const Projects = () => {
  // State to track the current slide
  const [goToSlide, setGoToSlide] = useState(0);

  // Map project data to slides (React components)
  const slides = project.map((item, index) => ({
    key: index,
    content: (
      <div
        className="px-2 cursor-pointer"
        onClick={() => setGoToSlide(index)}
      >
        <ProjectCard
          image={item.image}
          title={item.title}
          description={item.description}
          technologies={item.technologies}
        />
      </div>
    ),
  }));

  // Check if there are more than 3 projects to enable the carousel
  const useCarousel = project.length > 3;

  return (
    <div className="bg-black min-h-screen pt-24 pb-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500">
          EXPLORE SOME OF THE PROJECTS I’VE WORKED ON.
        </h2>
      </div>
      {useCarousel ? (
        <div className="max-w-6xl mx-auto px-16 relative">
          <div style={{ height: "600px", position: "relative" }}>
            <Carousel
              slides={slides}
              goToSlide={goToSlide}
              offsetRadius={2}
              showNavigation={false}
              animationConfig={{ tension: 120, friction: 14 }}
            />
            <PrevArrow onClick={() => setGoToSlide(goToSlide - 1)} />
            <NextArrow onClick={() => setGoToSlide(goToSlide + 1)} />
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
          {project.map((item, index) => (
            <ProjectCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              technologies={item.technologies}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const project = [
  {
    title: 'CollabEd Portal',
    description: 'An online learning platform that enables educators to manage courses, assignments, grades, and communication, while allowing students to access course materials, submit work, and track their academic progress.',
    image: CollabEd,
    git: '',
    technologies: ['ReactJS', 'NodeJS', 'PHP', 'Laravel', 'WordPress']
  },
  {
    title: 'Travel Genie',
    description: 'Discover your city or travel destination with our web app. Built with React and Material UI, connects you to top attractions, restaurants, and hotels. Using Google APIs, enjoy live location-based searches with filters for ratings, rankings, ensuring a better exploration experience.',
    image: Travel,
    git: "",
    technologies: ['React JS', 'Material UI', 'Node JS', 'Google APIs']
  },
  {
    title: 'Car Booking Management System',
    description: 'Introducing our innovative Cab Management System, designed to save users time and money. Built with Java and integrated with a MySQL backend, it ensures data integrity with robust error handling and validation mechanisms.',
    image: Car,
    git: "",
    technologies: ['Java', 'Swing', 'JFrame', 'AWT Library', "MySQL"]
  },
  {
    title: 'Dummy Project',
    description: 'A placeholder project to test the carousel and 3D effects. This project demonstrates how the Projects page handles more than 3 cards.',
    image: Car,
    git: "https://github.com",
    technologies: ['React', 'Tailwind', 'Node']
  }
];

export default Projects;