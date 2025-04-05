import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaLaravel, FaJava, FaAws, FaGoogle, FaGitAlt, FaDocker, FaWordpress, FaCloud 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiMui, SiMysql, SiPostman, SiTypescript, SiHeadlessui, SiPython, SiApachekafka, SiCplusplus, SiKotlin, SiAndroidstudio, SiJira, SiMongodb, SiPostgresql 
} from 'react-icons/si';

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
    { name: 'SQL', icon: <SiPostgresql /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'Kafka', icon: <SiApachekafka /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'Kotlin', icon: <SiKotlin /> },
  ],
  cloud: [
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Google Cloud', icon: <FaGoogle /> },
    { name: 'Azure', icon: <FaCloud /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'MySQL', icon: <SiMysql /> },
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
    className={`flex items-center gap-3 p-3 rounded-lg border border-gray-700 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 scroll-fade ${
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

const Skills = () => {
  return (
    <motion.div
      className="mt-12 mb-12 sm:px-16 px-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500 text-center leading-tight py-2">
        My Skills
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-gray-800/50 border border-transparent green-pink-gradient">
          <h3 className="text-2xl font-bold text-white mb-4">Frontend</h3>
          <div className="flex flex-wrap gap-3">
            {skills.frontend.map((skill, index) => (
              <SkillCard key={index} skill={skill} category="frontend" />
            ))}
          </div>
        </div>
        <div className="p-6 rounded-xl bg-gray-800/50 border border-transparent green-pink-gradient">
          <h3 className="text-2xl font-bold text-white mb-4">Backend</h3>
          <div className="flex flex-wrap gap-3">
            {skills.backend.map((skill, index) => (
              <SkillCard key={index} skill={skill} category="backend" />
            ))}
          </div>
        </div>
        <div className="p-6 rounded-xl bg-gray-800/50 border border-transparent green-pink-gradient">
          <h3 className="text-2xl font-bold text-white mb-4">Cloud & Databases</h3>
          <div className="flex flex-wrap gap-3">
            {skills.cloud.map((skill, index) => (
              <SkillCard key={index} skill={skill} category="cloud" />
            ))}
          </div>
        </div>
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

export default Skills;