import React from 'react';
import '../index.css';
import ButtonLink from './ButtonLink';
import { motion } from 'framer-motion'; // For animations
import { 
  FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaLaravel, FaJava, FaAws, FaGoogle, FaGitAlt, FaDocker, FaWordpress, FaCloud 
} from 'react-icons/fa'; // For skill icons
import { 
  SiTailwindcss, SiMui, SiMysql, SiPostman, SiTypescript, SiHeadlessui, SiPython, SiApachekafka, SiCplusplus, SiKotlin, SiAndroidstudio, SiJira, SiMongodb, SiPostgresql 
} from 'react-icons/si'; // Added SiMongodb, SiPostgresql for MongoDB and PostgreSQL

// Skills data
const skills = {
  frontend: [
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Material UI', icon: <SiMui /> },
    { name: 'Headless UI', icon: <SiHeadlessui /> },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'Laravel', icon: <FaLaravel /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'SQL', icon: <SiPostgresql /> }, // Added SQL, using SiPostgresql as the icon
    { name: 'Python', icon: <SiPython /> },
    { name: 'Kafka', icon: <SiApachekafka /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'Kotlin', icon: <SiKotlin /> },
  ],
  cloud: [ // Renamed to "Cloud & Databases" in the UI
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Google Cloud', icon: <FaGoogle /> },
    { name: 'Azure', icon: <FaCloud /> },
    { name: 'MongoDB', icon: <SiMongodb /> }, // Added MongoDB
    { name: 'PostgreSQL', icon: <SiPostgresql /> }, // Added PostgreSQL
    { name: 'MySQL', icon: <SiMysql /> }, // Moved MySQL from backend
  ],
  tools: [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'WordPress', icon: <FaWordpress /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'Android Studio', icon: <SiAndroidstudio /> },
    { name: 'Jira', icon: <SiJira /> },
  ],
};

// Skill Card Component
const SkillCard = ({ skill, category }) => (
  <motion.div
    className={`flex items-center gap-3 p-3 rounded-lg border border-gray-700 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 ${
      category === 'frontend' ? 'bg-gradient-to-r from-blue-500/20 to-teal-500/20' :
      category === 'backend' ? 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20' :
      category === 'cloud' ? 'bg-gradient-to-r from-green-500/20 to-cyan-500/20' :
      'bg-gradient-to-r from-pink-500/20 to-orange-500/20'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="text-3xl text-white">{skill.icon}</div>
    <p className="text-white text-base">{skill.name}</p>
  </motion.div>
);

// Skills Section Component
const SkillsSection = () => {
  return (
    <motion.div
      className="mt-12 mb-12 sm:px-16 px-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500 text-center leading-tight py-2">
        My Skills
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Frontend Skills */}
        <div className="p-6 rounded-xl bg-gray-800/50 border border-transparent green-pink-gradient">
          <h3 className="text-2xl font-bold text-white mb-4">Frontend</h3>
          <div className="flex flex-wrap gap-3">
            {skills.frontend.map((skill, index) => (
              <SkillCard key={index} skill={skill} category="frontend" />
            ))}
          </div>
        </div>
        {/* Backend Skills */}
        <div className="p-6 rounded-xl bg-gray-800/50 border border-transparent green-pink-gradient">
          <h3 className="text-2xl font-bold text-white mb-4">Backend</h3>
          <div className="flex flex-wrap gap-3">
            {skills.backend.map((skill, index) => (
              <SkillCard key={index} skill={skill} category="backend" />
            ))}
          </div>
        </div>
        {/* Cloud & Databases Skills */}
        <div className="p-6 rounded-xl bg-gray-800/50 border border-transparent green-pink-gradient">
          <h3 className="text-2xl font-bold text-white mb-4">Cloud & Databases</h3>
          <div className="flex flex-wrap gap-3">
            {skills.cloud.map((skill, index) => (
              <SkillCard key={index} skill={skill} category="cloud" />
            ))}
          </div>
        </div>
        {/* Tools Skills */}
        <div className="p-6 rounded-xl bg-gray-800/50 border border-transparent green-pink-gradient">
          <h3 className="text-2xl font-bold text-white mb-4">Tools</h3>
          <div className="flex flex-wrap gap-3">
            {skills.tools.map((skill, index) => (
              <SkillCard key={index} skill={skill} category="tools" />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="bg-black min-h-screen w-full text-white">
      <div
        className='sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden'
        id='about'
      >
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2 text-left max-w-3xl mx-auto'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500 text-center'>
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

          {/* Skills Section */}
          <SkillsSection />
        </div>
      </div>
    </div>
  );
};

export default About;