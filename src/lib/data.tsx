import { Github } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoPHP from '/public/images/logos/php.svg';
import LogoLaravel from '/public/images/logos/laravel.svg';
import LogoVue from '/public/images/logos/vue.svg';
import LogoAWS from '/public/images/logos/aws.svg';
import LogoAzure from '/public/images/logos/azure.svg';
import LogoTerraform from '/public/images/logos/terraform.svg';
import LogoMySQL from '/public/images/logos/mysql.svg';
import LogoSymphony from '/public/images/logos/symphony.png';
import LogoCakephp from '/public/images/logos/cakephp.svg';
import LogoCI from '/public/images/logos/codeigniter.svg';

import LogoRedis from '/public/images/logos/redis.svg';
import LogoDO from '/public/images/logos/digitalocean.svg';

import LogoGP from '/public/images/logos/gp-logo.png';
import LogoAppnap from '/public/images/logos/appnap.png';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoEg from '/public/images/logos/energaia.png';
import LogoW3 from '/public/images/logos/w3.jpeg';

import ProjectFiskil from '/public/images/evrmss.png';
import ProjectWingie from '/public/images/project-wingie.png';
import ProjectPepehousing from '/public/images/project-pepehousing.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/shawkivai',
  GITHUB_REPO: 'https://github.com/shawkivai/mustakim-portfolio',
  LINKEDIN: 'https://www.linkedin.com/in/md-mustakim-hayder-665637b4/',
  LEETCODE: '',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work Experience',
    href: '#experience',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/shawkivai',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'PHP',
    logo: LogoPHP,
    url: '',
  },
  {
    label: 'Laravel',
    logo: LogoLaravel,
    url: 'https://laravel.com/',
  },
  {
    label: 'CodeIgniter',
    logo: LogoCI,
    url: 'https://laravel.com/',
  },
  {
    label: 'Cake PHP',
    logo: LogoCakephp,
    url: 'https://laravel.com/',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Vue.js',
    logo: LogoVue,
    url: 'https://vuejs.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Socket.io',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://socket.io/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'MySQL',
    logo: LogoMySQL,
    url: 'https://www.mysql.com/',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'AWS',
    logo: LogoAWS,
    url: 'https://aws.amazon.com/',
  },
  {
    label: 'Azure',
    logo: LogoAzure,
    url: 'https://azure.microsoft.com/',
  },
  {
    label: 'DigitalOcean',
    logo: LogoDO,
    url: 'https://git-scm.com/',
  },
  {
    label: 'Redis',
    logo: LogoRedis,
    url: 'https://git-scm.com/',
  },
  {
    label: 'Terraform',
    logo: LogoTerraform,
    url: 'https://www.terraform.io/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  }
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoGP,
    logoAlt: 'Grameenphone logo',
    position: 'Senior Backend Engineer',
    companyName: 'Grameenphone',
    startDate: new Date(2024, 7),
    currentlyWorkHere: true,
    summary: [
      'Developed HRM software to streamline employee management and HR processes, including payroll and attendance tracking.',
      'Built APIs for a mobile app used by GP employees, ensuring secure and efficient data access.',
      'Converted the system into a Workday-like platform tailored for multinational corporations (MNCs), enabling scalable organizational management across global teams.',
      'Technologies Used: PHP, Laravel, jQuery, CakePHP, VueJs, MySQL, Docker',
    ],
  },
  {
    logo: LogoAppnap,
    darkModeLogo: LogoAppnap,
    logoAlt: 'Appnap Technologies Limited logo',
    position: 'Senior Software Engineer',
    companyName: 'Appnap Technologies Limited',
    startDate: new Date(2021, 2),
    endDate: new Date(2024, 8),
    summary: [
      'Deployed 40+ high-performing apps to cloud with improved load times and scalability',
      'Architected scalable social platform serving 5 Million users with 50% engagement increase',
      'Enabled real-time chat functionality with 30% faster response times',
      'Implemented secure user communication with encryption and enhanced platform security',
      'Mentored developers leading to faster development speed and improved code quality',
      'Technologies Used: REST API, PHP, Laravel, NodeJs, Socket.io, Docker, Azure, Terraform, MySQL, ElasticSearch',
    ],
  },
  {
    logo: LogoEg,
    darkModeLogo: LogoEg,
    logoAlt: 'Energaia Bangladesh Ltd. logo',
    position: 'Web Application Developer',
    companyName: 'Energaia Bangladesh Ltd.',
    startDate: new Date(2019, 5),
    endDate: new Date(2021, 1),
    summary: [
      'Built and deployed full-featured farm automation web application using VueJs and Laravel',
      'Increased efficiency by 20% through implementation of automated emails and cron jobs',
      'Expanded user base by 30% by implementing multi-language support',
      'Streamlined deployment processes by implementing CI/CD pipeline using CircleCI',
      'Developed e-commerce solutions using WordPress, WooCommerce, and integrated secure payment gateways',
      'Technologies Used: Laravel, NodeJs, VueJs, Docker, DigitalOcean, MySQL',
    ],
  },
  {
    logo: LogoW3,
    logoAlt: 'W3 Engineers logo',
    position: 'Junior Software Engineer',
    companyName: 'W3 Engineers',
    startDate: new Date(2018, 1),
    endDate: new Date(2019, 4),
    summary: [
      'Developed and maintained scalable web applications using modern PHP frameworks and JavaScript technologies.',
      'Collaborated with cross-functional teams to deliver high-quality software solutions for diverse client requirements.',
      'Implemented responsive front-end interfaces and optimized backend performance for enhanced user experience.',
      'Participated in code reviews and contributed to best practices for software development lifecycle.',
      'Technologies Used: PHP, Laravel, JavaScript, Vue.js, MySQL, Docker',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'EVRM',
    description:
      'End-to-end development of a visitor & employee access management system with touchless sign-in, QR code entry, visitor pre-registration, email notifications, digital signature, visitor screening, badge printing, emergency announcements, comprehensive employee management, meeting room booking, and scalability features.',
    url: '#',
    previewImage: ProjectFiskil,
    technologies: [
      'Vue.js',
      'Laravel',
      'Node.js',
      'Socket.io',
      'Flutter',
      'Laravel Vapor',
      'AWS',
      'Route53',
      'Lambda',
      'S3',
      'SES',
      'EC2',
      'LightSail',
    ],
  },
  {
    name: 'OneGP App',
    description:
      'HRM software to streamline employee management and HR processes, including payroll and attendance tracking. Built APIs for a mobile app used by GP employees, ensuring secure and efficient data access.',
    url: 'https://play.google.com/store',
    previewImage: ProjectWingie,
    technologies: [
      'PHP',
      'Laravel',
      'jQuery',
      'CakePHP',
      'VueJs',
      'MySQL',
      'Docker',
    ],
  },
  {
    name: 'Social Platform (5M Users)',
    description:
      'Architected scalable social platform serving 5 Million users with 50% engagement increase. Enabled real-time chat functionality with 30% faster response times and implemented secure user communication with encryption.',
    url: '#',
    previewImage: ProjectPepehousing,
    technologies: [
      'REST API',
      'PHP',
      'Laravel',
      'NodeJs',
      'Socket.io',
      'Docker',
      'Azure',
      'Terraform',
      'MySQL',
      'ElasticSearch',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Team Lead',
    personAvatar: AvatarKrisztian,
    title: 'Appnap Technologies Limited',
    testimonial:
      'Awarded ONE MAN ARMY for exceptional multitasking and leadership within the backend development team. Mustakim consistently delivered high-quality solutions and mentored team members effectively.',
  },
  {
    personName: 'HR Manager',
    personAvatar: AvatarEugen,
    title: 'Appnap Technologies Limited',
    testimonial:
      'Received Best Performer of the Month recognition four times in 2021. His ability to architect scalable platforms and deliver results is outstanding.',
  },
  {
    personName: 'Project Manager',
    personAvatar: AvatarDummy,
    title: 'Genex InfoSys Limited',
    testimonial:
      'Successfully developed and launched EVRM product as Product Owner. Mustakim demonstrated excellent leadership skills and technical expertise in building enterprise-level solutions.',
  },
];
