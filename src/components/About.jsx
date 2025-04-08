import React, { useEffect } from 'react';
import '../index.css';
import ButtonLink from './ButtonLink';
import Skills from './Skills';

const education = [
  {
    degree: "Master's in Computer Science",
    institution: "University of Texas at Arlington",
    year: "2022 - 2024",
    details:
      'Focused on full-stack development, cloud computing, and software engineering principles.',
  },
  {
    degree: "Bachelor's in Computer Engineering",
    institution: 'Indus University',
    year: '2018 - 2022',
    details:
      'Gained a strong foundation in programming, algorithms, and system design.',
  },
];

const About = () => {
  useEffect(() => {
    // Scroll-fade observer (for intro section)
    const fadeElements = document.querySelectorAll('.scroll-fade');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    fadeElements.forEach((el) => observer.observe(el));

    const timeline = document.querySelector('.education-timeline');
    const timelineDot = document.querySelector('.education-dot');
    const educationSection = document.querySelector('.education-section');
    const boxes = document.querySelectorAll('.education-info-box');

    const updateTimeline = () => {
      const scrollTop = window.scrollY;
      const sectionTop = educationSection.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = educationSection.offsetHeight;
      const windowHeight = window.innerHeight;

      const sectionVisible = Math.max(
        0,
        Math.min(sectionHeight, scrollTop - sectionTop + windowHeight)
      );
      const progress = sectionVisible / sectionHeight;

      timeline.style.height = `${progress * 100}%`;
      timeline.style.opacity = progress;
      timelineDot.style.top = `${progress * 100}%`;
      timelineDot.style.opacity = progress;

      timeline.style.boxShadow =
        progress > 0
          ? `0 0 20px 4px rgba(255, 255, 255, ${progress}), 0 0 30px 6px rgba(255, 255, 255, ${progress})`
          : 'none';

      // Flip each education box individually when in viewport
      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const isFullyInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        const isPartiallyInView = rect.top < window.innerHeight && rect.bottom > 0;
      
        // Use partial visibility so it shows as it scrolls in/out
        if (isPartiallyInView) {
          box.classList.add('visible');
        } else {
          box.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', updateTimeline);
    updateTimeline();

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', updateTimeline);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen w-full text-white relative">
      <div className="sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden" id="about">
        <div className="flex flex-col justify-around">
          {/* Introduction */}
          <div className="sm:px-16 px-2 text-left max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500 text-center">
              Introduction
            </h2>
            <p className="mt-3 mb-6 text-[17px] max-w-3xl leading-[30px] scroll-fade">
              Hello! I'm Abhishek Doshi, a recent Master's graduate from the
              University of Texas at Arlington, class of 2024, and a dedicated{' '}
              <a
                className="text-green-300 hover:text-green-500 duration-300"
                href="https://www.linkedin.com/in/abhishek-doshi-78412522b/"
                target="_blank"
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
              url="https://drive.google.com/file/d/15gOCEmzmiBwUpmSXJmtG5copnCe60rFh/view?usp=sharing"
              text="View Resume →"
              padding="p-3"
            />
          </div>

          {/* Skills Section */}
          <Skills />

          {/* Education Section */}
          <div className="education-section sm:px-16 px-2 mt-12 mb-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500 text-center leading-tight py-6 mb-8">
              Education
            </h2>
            <div className="education-container">
              <div className="education-timeline">
                <div className="education-dot"></div>
              </div>
              <div className="education-info">
                {education.map((edu, index) => (
                  <div key={index} className="education-info-box">
                    <div className="education-info-in">
                      <div className="education-role">
                        <h4>{edu.degree}</h4>
                        <h5>{edu.institution}</h5>
                      </div>
                      <h3>{edu.year}</h3>
                    </div>
                    <p>{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
