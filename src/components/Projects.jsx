import React from "react";
import CollabEd from '../assets/CollabEd.png';
import Travel from '../assets/Travel.png';
import Car from '../assets/Car.png';

const ProjectCard = ({ image, title, description, git, technologies }) => {
  return (
    <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {title === 'CollabEd Portal' && (
        <a href="#">
          <img className="w-full rounded-t-lg h-auto object-cover" src={CollabEd} alt="CollabEd Portal" />
        </a>
      )}
      {title === 'Travel Genie' && (
        <a href="#">
          <img className="w-full rounded-t-lg h-auto object-cover" src={Travel} alt="Travel Genie" />
        </a>
      )}
      {title === 'Car Booking Management System' && (
        <a href="#">
          <img className="w-full rounded-t-lg h-auto object-cover" src={Car} alt="Car Booking Management System" />
        </a>
      )}
      <div className="p-4 sm:p-6">
        <a href="#">
          <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
            {title}
          </h5>
        </a>
        <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="m-2 sm:m-4 lg:m-6 flex justify-between">
        <div className="flex flex-wrap gap-2 pl-2">
          {technologies.map((tag, index) => (
            <p key={`${index}-${tag}`} className="text-[14px] text-blue-500">
              #{tag}
            </p>
          ))}
        </div>
        <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-black py-12">
      <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
        {project.map((item, index) => (
          <ProjectCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            git={item.git}
            technologies={item.technologies}
          />
        ))}
      </div>
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
  }
];

export default Projects;