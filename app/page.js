'use client';
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeJob, setActiveJob] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Job data remains the same
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
    },
    {
      title: "HRM Software for Grameenphone",
      description: "Developed comprehensive HRM software to streamline employee management and HR processes, including payroll and attendance tracking. Built secure APIs for GP employee mobile app access.",
      tech: ["PHP", "jQuery", "CakePHP", "MySQL", "Docker"],
      github: "https://github.com/shawki",
      external: "https://grameenphone.com"
    },
    {
      title: "HRM Software for Grameenphone",
      description: "Developed comprehensive HRM software to streamline employee management and HR processes, including payroll and attendance tracking. Built secure APIs for GP employee mobile app access.",
      tech: ["PHP", "jQuery", "CakePHP", "MySQL", "Docker"],
      github: "https://github.com/shawki",
      external: "https://grameenphone.com"
    }
  ];

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] text-gray-200">
      <nav className="fixed w-full px-6 py-4 bg-[#0a192f]/95 backdrop-blur-md z-50 shadow-2xl">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#" className="text-emerald-400 font-mono text-xl hover:text-emerald-300 transition-colors">
            Md. Mustakim Hayder
          </a>
          <div className="hidden md:flex items-center space-x-8 font-sans text-sm">
            {["About", "Experience", "Work", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:translate-y-[-2px]"
              >
                {item}
              </a>
            ))}
            <button className="border-2 border-emerald-400 text-emerald-400 px-5 py-2 rounded-md hover:bg-emerald-400/10 transition-all duration-300 transform hover:scale-105">
              Resume
            </button>
          </div>
        </div>
      </nav>

      <main className="px-6 pt-24">
        <div className="max-w-6xl mx-auto">
          <section 
            id="about"
            className="min-h-screen flex flex-col justify-center relative overflow-hidden"
          >
            <div className="z-10 animate-fadeIn">
              <h1 className="font-mono text-emerald-400 mb-5 text-lg">
                Hi, my name is
              </h1>
              <h2 className="text-7xl font-bold text-slate-100 mb-4 animate-slideUp">
                Md. Mustakim Hayder.
              </h2>
              <h3 className="text-6xl font-bold text-slate-400 mb-8 animate-slideUp delay-100">
                Senior Backend Engineer.
              </h3>
              <p className="text-slate-300 max-w-xl mb-12 text-lg leading-relaxed animate-fadeIn delay-200">
                I'm a senior backend engineer with 7.5 years of experience, specializing in building scalable web applications and cloud solutions. 
                Currently, I'm working as a Senior Backend Engineer at Grameenphone.
              </p>
              <a 
                href="#work" 
                className="group relative inline-block px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-sans text-lg overflow-hidden rounded-md transition-all duration-300 hover:text-slate-900"
              >
                <span className="absolute inset-0 bg-emerald-400 transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
                <span className="relative z-10 group-hover:text-slate-900">Check out my work!</span>
              </a>
            </div>
            <div className="absolute -right-1/4 -bottom-1/4 w-2/3 h-2/3 bg-emerald-400/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -left-1/4 -top-1/4 w-2/3 h-2/3 bg-emerald-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </section>

          <section
            id="experience"
            className="py-24"
          >
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-100 animate-fadeIn">Where I've Worked</h2>
              <div className="flex-1 h-[1px] bg-emerald-400/20"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="flex flex-col font-sans text-sm rounded-lg overflow-hidden bg-slate-800/50 shadow-2xl backdrop-blur-sm">
                  {jobs.map((job, index) => (
                    <button
                      key={job.company}
                      onClick={() => setActiveJob(index)}
                      className={`px-4 py-3 text-left border-l-2 ${
                        activeJob === index
                          ? 'border-emerald-400 bg-emerald-400/10 text-emerald-400'
                          : 'border-slate-700 hover:bg-slate-700/50 hover:text-emerald-400 text-slate-300'
                      } transition-all duration-300 ease-in-out transform hover:translate-x-2`}
                    >
                      {job.company}
                    </button>
                  ))}
                </div>
              </div>

              <div className="md:w-2/3">
                <div
                  className="bg-slate-800/50 p-8 rounded-lg shadow-2xl backdrop-blur-sm transform transition-all duration-500 ease-in-out hover:shadow-emerald-400/10"
                  style={{
                    opacity: isTransitioning ? 0 : 1,
                    transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)'
                  }}
                >
                  <h3 className="text-2xl text-slate-100 mb-2 font-bold">
                    {jobs[activeJob].role} <span className="text-emerald-400">@ {jobs[activeJob].company}</span>
                  </h3>
                  <p className="font-mono text-sm text-slate-400 mb-6">
                    {jobs[activeJob].date}
                  </p>
                  <div className="mb-8">
                    <p className="text-slate-300 mb-4">Tech Stack:</p>
                    <div className="flex flex-wrap gap-3">
                      {jobs[activeJob].tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-emerald-400/10 rounded-full text-emerald-400 text-sm transform transition-all duration-300 hover:scale-110 hover:bg-emerald-400 hover:text-slate-900"
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
                        className="flex gap-3 text-slate-300 transform transition-all duration-300 hover:translate-x-2"
                      >
                        <span className="text-emerald-400">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="product-experience" className="py-24">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-100 animate-fadeIn">Product Experience</h2>
              <div className="flex-1 h-[1px] bg-emerald-400/20"></div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-lg shadow-2xl backdrop-blur-sm">
              <div className="mb-6">
                <h3 className="text-2xl text-slate-100 mb-2 font-bold">
                  Product Owner <span className="text-emerald-400">@ EVRM</span>
                </h3>
                <p className="text-slate-300 mb-6">
                  Built a visitor & employee access management system
                </p>
              </div>

              <div className="mb-8">
                <p className="text-slate-300 mb-4">Tools and Technologies:</p>
                <div className="flex flex-wrap gap-3">
                  {['Vue.js', 'Laravel', 'NodeJs', 'Socket.io', 'Flutter', 'Laravel Vapor', 'AWS'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-emerald-400/10 rounded-full text-emerald-400 text-sm transform transition-all duration-300 hover:scale-110 hover:bg-emerald-400 hover:text-slate-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <p className="text-slate-300 mb-4">Key Features:</p>
                <ul className="space-y-4">
                  {[
                    'QR login: Secured access with QR codes, eliminating physical keys.',
                    'Digital signing: Streamlined document signing for efficiency and validity.',
                    'Real-time communication: Enabled real-time interaction with efficient background processing.',
                    'API & cron jobs: Automated workflows and integrations for improved efficiency.'
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-slate-300 transform transition-all duration-300 hover:translate-x-2"
                    >
                      <span className="text-emerald-400">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <p className="text-slate-300 mb-4">Impact and Benefits:</p>
                <p className="text-slate-300 leading-relaxed">
                  Streamlined visitor/employee check-in: Reduced wait times, ensured accuracy, and
                  enhanced security. Built a scalable solution for broader adoption.
                </p>
              </div>

              <div className="flex gap-6 items-center">
                <a 
                  href="https://evrm.io" 
                  className="group relative inline-block px-6 py-3 border-2 border-emerald-400 text-emerald-400 font-sans text-sm overflow-hidden rounded-md transition-all duration-300 hover:text-slate-900"
                >
                  <span className="absolute inset-0 bg-emerald-400 transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
                  <span className="relative z-10 group-hover:text-slate-900">Visit Web App</span>
                </a>
                <a 
                  href="https://play.google.com/store/apps/developer?id=IUX+IT&hl=en-US"
                  className="group relative inline-block px-6 py-3 border-2 border-emerald-400 text-emerald-400 font-sans text-sm overflow-hidden rounded-md transition-all duration-300 hover:text-slate-900"
                >
                  <span className="absolute inset-0 bg-emerald-400 transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
                  <span className="relative z-10 group-hover:text-slate-900">Play Store</span>
                </a>
              </div>
            </div>
          </section>

          <section id="work" className="py-24">
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-3xl font-bold text-slate-100">Some Things I've Built</h2>
              <div className="flex-1 h-[1px] bg-emerald-400/20"></div>
            </div>
            <div className="space-y-32">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="relative grid md:grid-cols-2 gap-8 group"
                >
                  <div className="bg-slate-800/50 rounded-lg overflow-hidden shadow-2xl backdrop-blur-sm group-hover:shadow-emerald-400/20 transition-all duration-500">
                    <div className="relative h-[300px] bg-emerald-400/5 group-hover:bg-emerald-400/10 transition-all duration-500">
                        {/* <img
                          src="https://www.evrm.io/wp-content/uploads/2024/02/Screenshot_2024-02-20-03-40-04-153.jpeg"
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        /> */}
                    </div>
                  </div>
                  <div className={`${index % 2 === 0 ? 'md:order-first text-right' : 'text-left'}`}>
                    <p className="font-mono text-emerald-400 mb-2">Featured Project</p>
                    <h3 className="text-3xl font-bold text-slate-100 mb-4">{project.title}</h3>
                    <div className="bg-slate-800/50 p-6 rounded-lg mb-6 backdrop-blur-sm shadow-xl">
                      <p className="text-slate-300 leading-relaxed">{project.description}</p>
                    </div>
                    <ul className="flex flex-wrap gap-4 mb-6 font-mono text-sm text-slate-400 justify-end">
                      {project.tech.map(tech => (
                        <li key={tech} className="hover:text-emerald-400 transition-colors">{tech}</li>
                      ))}
                    </ul>
                    <div className="flex gap-6 items-center justify-end">
                      <a href={project.github} className="text-slate-300 hover:text-emerald-400 transition-colors transform hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a href={project.external} className="text-slate-300 hover:text-emerald-400 transition-colors transform hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          <section id="contact" className="py-24">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-100 animate-fadeIn">Get In Touch</h2>
              <div className="flex-1 h-[1px] bg-emerald-400/20"></div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg shadow-2xl backdrop-blur-sm transform transition-all duration-500 hover:shadow-emerald-400/10">
              <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                I'm always open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-slate-100 mb-4">Contact Info</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-slate-300 mb-2">Email:</p>
                      <a 
                        href="mailto:mustakim.hayder@gmail.com" 
                        className="text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        shawkiahmed40@gmail.com
                      </a>
                    </div>
                    <div>
                      <p className="text-slate-300 mb-2">Location:</p>
                      <p className="text-emerald-400">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-slate-100 mb-4">Social Links</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a 
                      href="https://github.com/shawki-iuxit" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-all duration-300 group"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">GitHub</span>
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/in/md-mustakim-hayder-665637b4/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-all duration-300 group"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">LinkedIn</span>
                    </a>
                    
                    <a 
                      href="https://twitter.com/shawki" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-all duration-300 group"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">Twitter</span>
                    </a>
                    
                    <a 
                      href="https://www.facebook.com/ahmedshawki40/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-all duration-300 group"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
