'use client';
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeJob, setActiveJob] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const jobs = [
      {
        company: 'Grameenphone',
        role: 'Senior Backend Engineer',
        date: 'August 2024 - Present',
        tech: ['PHP', 'jQuery', 'CakePHP', 'MySQL', 'Docker'],
        responsibilities: [
          "Developed HRM software to streamline employee management and HR processes",
          "Built APIs for a mobile app used by GP employees, ensuring secure and efficient data access",
          "Implemented payroll and attendance tracking systems",
          "Optimized database queries and improved application performance",
          "Collaborated with cross-functional teams to deliver high-quality solutions"
        ]
      },
      {
        company: 'Appnap Technologies',
        role: 'Backend Team Lead',
        date: 'January 2022 - July 2024',
        tech: ['Laravel', 'NodeJs', 'Socket.io', 'Docker', 'Azure'],
        responsibilities: [
          "Led backend development team of 8 engineers",
          "Architected scalable social platform serving 5M+ users",
          "Implemented real-time chat functionality",
          "Improved system response times by 30%",
          "Mentored junior developers and conducted code reviews"
        ]
      },
      {
        company: 'Energaia Bangladesh',
        role: 'Full Stack Developer',
        date: 'March 2020 - December 2021',
        tech: ['React', 'Node.js', 'MongoDB', 'Express'],
        responsibilities: [
          "Developed full-stack web applications",
          "Implemented responsive UI designs",
          "Created RESTful APIs",
          "Managed database architecture",
          "Deployed applications to cloud platforms"
        ]
      },
      {
        company: 'W3 Engineers',
        role: 'Junior Developer',
        date: 'June 2018 - February 2020',
        tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
        responsibilities: [
          "Built web applications using Laravel",
          "Maintained existing codebases",
          "Fixed bugs and implemented new features",
          "Collaborated with design team",
          "Participated in code reviews"
        ]
      }
  ]

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const projects = [
    {
      title: "HRM Software for Grameenphone",
      description: "Developed comprehensive HRM software to streamline employee management and HR processes, including payroll and attendance tracking. Built secure APIs for GP employee mobile app access.",
      tech: ["PHP", "jQuery", "CakePHP", "MySQL", "Docker"],
      github: "https://github.com/shawki",
      external: "https://grameenphone.com"
    },
    {
      title: "Social Platform at Appnap", 
      description: "Architected scalable social platform serving 5 Million users with 50% engagement increase. Implemented real-time chat with 30% faster response times and enhanced security features.",
      tech: ["Laravel", "NodeJs", "Socket.io", "Docker", "Azure"],
      github: "https://github.com/shawki",
      external: "https://appnap.io"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a2b4c] text-gray-200">
      <nav className="fixed w-full px-6 py-4 bg-[#0f1a2e]/90 backdrop-blur-sm z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#" className="text-blue-400 font-mono text-xl">Md. Mustakim Hayder</a>
          <div className="hidden md:flex items-center space-x-8 font-sans text-sm">
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors">Experience</a>
            <a href="#work" className="text-gray-300 hover:text-blue-400 transition-colors">Work</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
            <button className="border border-blue-400 text-blue-400 px-5 py-2 rounded-md hover:bg-blue-400/10 transition-colors">Resume</button>
          </div>
        </div>
      </nav>

      <main className="px-6 pt-24">
        <div className="max-w-6xl mx-auto">
          <section 
            id="intro"
            className="min-h-screen flex flex-col justify-center relative overflow-hidden"
          >
            <div className="z-10">
              <h1 className="font-mono text-blue-400 mb-5">
                Hi, my name is
              </h1>
              <h2 className="text-7xl font-bold text-white mb-4">
                Md. Mustakim Hayder.
              </h2>
              <h3 className="text-6xl font-bold text-gray-400 mb-8">
                Senior Backend Engineer.
              </h3>
              <p className="text-gray-300 max-w-xl mb-12 text-lg leading-relaxed">
                I'm a senior backend engineer with 7.5 years of experience, specializing in building scalable web applications and cloud solutions. 
                Currently, I'm working as a Senior Backend Engineer at Grameenphone.
              </p>
              <a 
                href="#work" 
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-md hover:bg-blue-400/10 font-sans text-lg transition-colors inline-block"
              >
                Check out my work!
              </a>
            </div>
            <div className="absolute -right-1/4 -bottom-1/4 w-2/3 h-2/3 bg-blue-400/5 rounded-full blur-3xl"></div>
            <div className="absolute -left-1/4 -top-1/4 w-2/3 h-2/3 bg-blue-400/5 rounded-full blur-3xl"></div>
          </section>

          <section
            id="experience"
            className="py-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-2xl font-bold text-white animate-fade-in">Where I've Worked</h2>
              <div className="flex-1 h-[1px] bg-gray-700"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="flex flex-col font-sans text-sm rounded-lg overflow-hidden bg-[#1c2f4a] shadow-xl">
                  {jobs.map((job, index) => (
                    <button
                      key={job.company}
                      onClick={() => setActiveJob(index)}
                      className={`px-4 py-3 text-left border-l-2 ${
                        activeJob === index
                          ? 'border-blue-400 bg-[#243b63] text-blue-400'
                          : 'border-gray-700 hover:bg-[#243b63] hover:text-blue-400 text-gray-300'
                      } transition-all duration-300 ease-in-out transform hover:translate-x-2`}
                    >
                      {job.company}
                    </button>
                  ))}
                </div>
              </div>

              <div className="md:w-2/3">
                <div
                  className="bg-[#1c2f4a] p-6 rounded-lg shadow-xl transform transition-all duration-500 ease-in-out"
                  style={{
                    opacity: isTransitioning ? 0 : 1,
                    transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)'
                  }}
                >
                  <h3 className="text-xl text-white mb-2 font-bold">
                    {jobs[activeJob].role} <span className="text-blue-400">@ {jobs[activeJob].company}</span>
                  </h3>
                  <p className="font-mono text-sm text-gray-400 mb-4">
                    {jobs[activeJob].date}
                  </p>
                  <div className="mb-6">
                    <p className="text-gray-300 mb-3">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {jobs[activeJob].tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#243b63] rounded-full text-blue-400 text-sm transform transition-all duration-300 hover:scale-110 hover:bg-blue-400 hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {jobs[activeJob].responsibilities.map((item, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-gray-300 transform transition-all duration-300 hover:translate-x-2"
                      >
                        <span className="text-blue-400">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section
            id="work"
            className="py-24"
          >
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-2xl font-bold text-white">Some Things I've Built</h2>
              <div className="flex-1 h-[1px] bg-gray-700"></div>
            </div>
            <div className="space-y-24">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="relative grid md:grid-cols-2 gap-8 hover:translate-y-[-4px] transition-transform duration-300"
                >
                  <div className="bg-[#243b63] rounded-lg overflow-hidden opacity-25 hover:opacity-100 transition-opacity">
                    <div className="h-full bg-blue-400/20"></div>
                  </div>
                  <div className={`${index % 2 === 0 ? 'md:order-first text-right' : 'text-left'}`}>
                    <p className="font-mono text-blue-400 mb-2">Featured Project</p>
                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                    <div className="bg-[#243b63] p-6 rounded-lg mb-4">
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                    <ul className="flex flex-wrap gap-3 mb-4 font-mono text-sm text-gray-400 justify-end">
                      {project.tech.map(tech => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    <div className="flex gap-4 items-center justify-end">
                      <a href={project.github} className="text-white hover:text-blue-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a href={project.external} className="text-white hover:text-blue-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
