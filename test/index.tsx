import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { FaGithub, FaLinkedin, FaInstagram, FaLink, FaBars, FaTimes } from 'react-icons/fa';

const ACCENT_COLOR_CLASS = 'text-sky-600';
const ACCENT_BG_COLOR_CLASS = 'bg-sky-600';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/ntdkhiem',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/ntd-khiem',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://instagram.com',
  },
];

const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const slideData = [
  {
    title: 'DevOps & Software Engineering',
    description: 'Hands-on experience building scalable infrastructures on AWS. Specialized in Python, Go, CI/CD (Jenkins), IaC (Terraform), Kubernetes, and incident prevention through automated monitoring.',
    imageUrl: './assets/pic2.jpg',
    imageAlt: 'Khiem Nguyen in an auditorium with a teddy bear on his shoulder',
    bgColor: 'bg-white',
  },
  {
    title: 'Beyond the Keyboard',
    description: 'Passionate about soccer, both on and off the field. I thrive on teamwork and strategy. Actively networking and attending conferences to stay on the cutting edge.',
    imageUrl: './assets/background.JPG',
    imageAlt: 'A soccer ball on a green field',
    bgColor: 'bg-gray-50',
  },
  {
    title: 'Engineering Philosophy',
    description: 'A firm believer in low-level optimization and elegant, high-scale deployments. Committed to open source and building tools that empower other developers.',
    imageUrl: 'https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'A server room with many servers',
    bgColor: 'bg-slate-50',
  },
];

const experienceData = [
    {
        company: 'Solid State Scientific Corporation',
        title: 'DevOps Software Engineer',
        dates: 'Mar 2025 - Present',
        description: [
            'Created build pipeline in Bash for C++ distributed radar signal processing, saving team 30 minutes per compiling.',
            'Architected 3 scalable low-latency pipelines across UK, Japan, and Korea to facilitate real-time weather-data transfer to the US.',
            'Deployed an internal knowledge base for 20+ engineers to AWS Elastic Kubernetes Service using Terraform and Helm.',
            'Automated enterprise Jenkins controller creation using Config-as-Code, reducing creation time from 2 days to 15 minutes.',
            'Deployed a monitoring and alerting system using AWS CloudWatch with custom metrics for proactive incident resolution.'
        ],
    },
    {
        company: '2Witech Solutions',
        title: 'Software Engineer',
        dates: 'Jan 2025 - Mar 2025',
        description: [
            'Developed a Python script to automate real-time detection and analysis of PFAS in water, saving the team 3 hours per run.',
            'Processed time-series sensor data, applying data techniques to ensure accuracy and reliability in monitoring outcomes.'
        ],
    },
    {
        company: 'Cocoon',
        title: 'Co-Founder',
        dates: 'Jul 2021 - Jan 2025',
        description: [
            'Delivered a social platform connecting a social-anxious community with AI coaching for a confidence-building journey.',
            'Secured $3,000 in grant funding from startup pitching competitions.',
            'Led end-to-end system design, architecture decisions, and iterative prototyping across frontend and backend.'
        ],
    },
    {
        company: 'Solomon Consulting Group',
        title: 'Software Engineer Intern',
        dates: 'May 2024 - Aug 2024',
        description: [
            'Built a home energy analytics engine in Python, providing personalized recommendations from a pool of $100k+ energy incentives.',
            'Utilized Levenshtein distance and statistical modeling on 10+ data points for energy consumption analysis.',
        ],
    },
];

const projectsData = [
    {
        title: 'DCaaS - Distributed Compression Platform',
        description: 'Engineered an event-driven file compression platform processing large datasets in parallel using Go, with Google Pub/Sub for asynchronous task orchestration and GKE for container management.',
        imageUrl: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: 'Abstract cloud infrastructure visualization',
        tags: ['Go', 'GCP', 'Kubernetes', 'GitOps', 'Pub/Sub'],
        liveUrl: null,
        sourceUrl: 'https://github.com/ntdkhiem/cloud-distributed-compression-platform',
    },
    {
        title: 'Caption This!',
        description: 'A web-based multiplayer caption-battle game using Python over a bidirectional TCP connection with WebSockets. Utilizes Redis for low-latency state synchronization and NGINX as a load balancer.',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: 'Interactive game dashboard',
        tags: ['Python', 'WebSocket', 'Redis', 'NGINX', 'Kubernetes'],
        liveUrl: null,
        sourceUrl: 'https://github.com/ntdkhiem/caption-this',
    },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header
            id="home"
            className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200"
            aria-label="Global Navigation"
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center space-x-6">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit my ${link.name} profile`}
                                className="text-gray-700 transition hover:text-sky-600 p-2 -m-2"
                            >
                                <link.icon size={28} aria-hidden="true" />
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                             <a key={link.name} href={link.href} className="font-medium text-gray-700 transition hover:text-sky-600">
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <button 
                          onClick={() => setIsMenuOpen(!isMenuOpen)} 
                          className="p-2 -m-2 text-gray-700"
                          aria-label="Open main menu"
                          aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                        </button>
                    </div>
                </div>
            </nav>
            
            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-black/20 z-40 transition-opacity md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)}>
                <div 
                    className={`fixed top-0 right-0 h-full w-2/3 max-w-sm bg-gray-100 shadow-xl z-50 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-8 flex flex-col space-y-6 bg-gray-300">
                        {navLinks.map((link) => (
                             <a 
                                key={link.name} 
                                href={link.href} 
                                className="text-2xl font-medium text-gray-800 transition hover:text-sky-600"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

        </header>
    );
};

const HeroCarousel = () => {
  return (
    <section id="hero" className="snap-x snap-mandatory h-screen overflow-x-auto flex w-full no-scrollbar">
      {slideData.map((slide, index) => (
        <div key={index} className={`flex-shrink-0 w-full h-full snap-center flex items-center justify-center ${slide.bgColor}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 md:pt-0">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900">
                  {slide.title}
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
                  {slide.description}
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src={slide.imageUrl}
                  alt={slide.imageAlt}
                  className="rounded-lg shadow-2xl object-cover w-full h-full aspect-video"
                  width={1200}
                  height={675}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const Experience = () => {
    return (
        <section id="experience" className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Experience</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        A timeline of my professional journey, focusing on impact and key technologies.
                    </p>
                </div>
                <div className="mt-16 flow-root">
                    <div className="relative -m-8">
                        {/* Timeline line */}
                        <div className="absolute top-4 left-1/2 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
                        
                        <div className="relative space-y-16">
                            {experienceData.map((item, index) => {
                                const isEven = index % 2 === 0;

                                const content = (
                                    <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-8' : 'md:justify-start md:pl-8'}`}>
                                        <div className={`p-6 bg-white border border-gray-200 rounded-lg shadow-sm w-full md:max-w-md`}>
                                            <p className="text-sm font-semibold text-sky-600">{item.dates}</p>
                                            <h3 className="mt-1 text-lg font-semibold text-gray-900">{item.title}</h3>
                                            <p className="mt-1 text-base font-medium text-gray-700">{item.company}</p>
                                            <ul className={`mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-600`}>
                                                {item.description.map((desc, i) => (
                                                    <li key={i}>{desc}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                );

                                const spacer = <div className="hidden md:block md:w-1/2"></div>;

                                return (
                                    <div key={index} className="relative flex justify-center">
                                        {/* Timeline Dot */}
                                        <div className="absolute top-4 -ml-2.5 h-5 w-5 rounded-full border-4 border-gray-50 bg-gray-300"></div>
                                        {isEven ? (
                                            <>
                                                {content}
                                                {spacer}
                                            </>
                                        ) : (
                                            <>
                                                {spacer}
                                                {content}
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        A selection of projects that demonstrate my technical skills and passion for building.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {projectsData.map((project) => (
                        <article key={project.title} className="flex flex-col items-start justify-between rounded-2xl border border-gray-200 p-6 shadow-sm transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                            <div className="relative w-full">
                                <img
                                    src={project.imageUrl}
                                    alt={project.imageAlt}
                                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">{project.title}</h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{project.description}</p>
                                </div>
                                <div className="mt-6 flex items-center gap-x-4">
                                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700 transition hover:text-sky-600">
                                        <FaGithub size={24} aria-label="Source Code" />
                                    </a>
                                    {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700 transition hover:text-sky-600">
                                        <FaLink size={24} aria-label="Live Demo" />
                                    </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    return (
        <footer id="contact" className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Let's Connect</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Open to new opportunities and collaborations. Feel free to reach out.
                </p>
                <a href="mailto:ntdkhiem@gmail.com" className="mt-10 inline-block rounded-md bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                    ntdkhiem@gmail.com
                </a>
                <div className="mt-16 flex justify-center space-x-6">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit my ${link.name} profile`}
                            className="text-gray-700 transition hover:text-sky-600"
                        >
                            <link.icon size={28} aria-hidden="true" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

const App = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <HeroCarousel />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
