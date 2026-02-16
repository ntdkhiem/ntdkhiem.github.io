import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lora } from "next/font/google";

const lora = Lora({ weight: "700", subsets: ["latin"] });

interface ProjectProp {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    github_link?: string;
    live_link?: string;
    youtube_link?: string;
}

const PROJECTS: ProjectProp[] = [
    {
        id: 1,
        title: "DCaaS - Distributed Compression as a Service",
        description: "Engineered an event-driven file compression platform using Go for parallel processing of large datasets, integrating Google Pub/Sub and Kubernetes for orchestration and management. Developed an observability pipeline with Google Operations Suite and automated testing, containerization, and deployment via a GitOps CI/CD pipeline using GitHub Actions.",
        technologies: ["Go", "Google Pub/Sub", "Kubernetes", "Google Operations Suite", "GitHub Actions"],
        github_link: "github.com/ntdkhiem/cloud-distributed-compression-platform",
        youtube_link: "https://www.youtube.com/playlist?list=PLSg4pGV1EkBo1JCfXl4zZoHkbFe4zk_EL",
    },
    {
        id: 2,
        title: "Caption This!",
        description: "Built a web-based multiplayer caption-battle game using Python over bidirectional TCP connection, WebSocket, and utilized Redis for low-latency state synchronization and NGINX as an application load balancer. Automated microservice deployment on Google Kubernetes using Skaffold for high availability.",
        technologies: ["Python", "WebSocket", "Redis", "Kubernetes", "NGINX"],
        github_link: "github.com/ntdkhiem/caption-this",
    },
    {
        id: 3, // Incrementing from 2
        title: "EnciphDeWord",
        description: "A Python-based command-line application designed to help beginners explore and understand classic cryptography. It implements various ciphers like Affine Cipher, Hill Digraph Cipher, and Vigenère Square, and includes installation instructions and a TODO list for future enhancements.",
        technologies: ["Python", "Cryptography"], // Keeping it concise for technologies
        github_link: "github.com/ntdkhiem/EnciphDeWord",
        live_link: "asciinema.org/a/158352?autoplay=1",
    },
    {
        id: 4, // Incrementing from 3
        title: "Hordes.io Auto Grinding Bot",
        description: "An auto-grinding bot for the game hordes.io, developed using Python and Selenium. It automates in-game actions such as attacking, defending, enemy searching, random movement, and automatic respawning.",
        technologies: ["Python", "Selenium"],
        github_link: "github.com/ntdkhiem/hordes.io-bots",
        youtube_link: "https://www.youtube.com/watch?v=xRAFMiTzsn0&feature=youtu.be",
    },
];



export default function Projects() {
    return (
      <div className="relative text-white mx-10 lg:mx-40 py-8">
        <div className="flex flex-col md:flex-row justify-center items-start gap-x-12 ">
          <div className="flex flex-col gap-y-12">
                              {PROJECTS.filter((_, index) => index % 2 === 0).map((project: ProjectProp) => (
                                  <motion.div
                                      key={project.id}
                                      className="bg-white p-8 rounded-xl shadow-scandi"
                                      whileHover={{ scale: 1.05, y: -5 }}
                                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                  >
                                                              <h3 className={`text-xl font-bold mb-2 ${lora.className} text-espresso-brown`}>{project.title}</h3>
                                                              <p className="text-base tracking-tight text-espresso-brown mb-4">{project.description}</p>
                                                              <div className="flex flex-wrap gap-2 mb-4">                          {project.technologies.map((tech: string, index: number) => (
                              <span key={index} className="bg-oatmeal-light text-espresso-brown text-xs font-medium px-2.5 py-1 rounded-full">
                                  {tech}
                              </span>
                          ))}
                      </div>
                      <div className="flex gap-4">
                          {project.github_link && (
                              <a href={`https://${project.github_link}`} target="_blank" rel="noopener noreferrer" className="text-espresso-brown">
                                  <Image src="/github_espresso.svg" alt="GitHub" width={24} height={24} className="hover:opacity-70 text-espresso-brown" />
                              </a>
                          )}
                          {project.youtube_link && (
                              <a href={`${project.youtube_link}`} target="_blank" rel="noopener noreferrer" className="text-espresso-brown">
                                  <Image src="/youtube.svg" alt="Youtube" width={24} height={24} className="hover:opacity-70 text-espresso-brown" />
                              </a>
                          )}
                          {project.live_link && (
                              <a href={`https://${project.live_link}`} target="_blank" rel="noopener noreferrer" className="text-espresso-brown">
                              Live Demo &#8599;
                              </a>
                          )}
                      </div>
                  </motion.div>
              ))}
          </div>

                      <div className="flex flex-col gap-y-12 md:mt-20">
                          {PROJECTS.filter((_, index) => index % 2 !== 0).map((project: ProjectProp) => (
                              <motion.div
                                  key={project.id}
                                  className="bg-white p-8 rounded-xl shadow-scandi"
                                  whileHover={{ scale: 1.05, y: -5 }}
                                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                              >
                                                          <h3 className={`text-xl font-bold mb-2 ${lora.className} text-espresso-brown`}>{project.title}</h3>
                                                          <p className="text-base text-espresso-brown mb-4">{project.description}</p>
                                                          <div className="flex flex-wrap gap-2 mb-4">                          {project.technologies.map((tech: string, index: number) => (
                              <span key={index} className="bg-oatmeal-light text-espresso-brown text-xs font-medium px-2.5 py-1 rounded-full">
                                  {tech}
                              </span>
                          ))}
                      </div>
                      <div className="flex gap-4">
                          {project.github_link && (
                              <a href={`https://${project.github_link}`} target="_blank" rel="noopener noreferrer" className="text-espresso-brown">
                                  <Image src="/github_espresso.svg" alt="GitHub" width={24} height={24} className="hover:opacity-70" />
                              </a>
                          )}
                          {project.youtube_link && (
                              <a href={`${project.youtube_link}`} target="_blank" rel="noopener noreferrer" className="text-espresso-brown">
                                  <Image src="/youtube.svg" alt="Youtube" width={24} height={24} className="hover:opacity-70" />
                              </a>
                          )}
                          {project.live_link && (
                              <a href={`https://${project.live_link}`} target="_blank" rel="noopener noreferrer" className="text-espresso-brown">
                              Live Demo &#8599;
                              </a>
                          )}
                      </div>
                  </motion.div>
              ))}
          </div>
        </div>
      </div>
    );
}
