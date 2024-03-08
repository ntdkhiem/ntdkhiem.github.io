"use client";
import React from "react";
import { motion } from "framer-motion";

const EVENTS = [
  {
    title: "An Organizer of HackUMass X",
    subtitle: "The origin",
    date: "June, 2022",
    content: [
      "After being a participant for many hackathons in high school and winning a few, I decided to take the next step and become an organizer for HackUMass X !",
    ],
    dateColors: [
      "bg-yellow-500",
      "bg-yellow-50",
      "text-yellow-800",
      "text-yellow-300",
    ],
  },
  {
    title: "Developer/Maintainer of HackUMass X Website",
    subtitle: "Pre-HackUMass X",
    date: "July, 2022",
    content: [
      "In a team of 7 developers, we were tasked to maintain the website for HackUMass X.",
      "I was the first to resolve more than 15 issues for both the frontend and backend in just 2 weeks into the project!",
    ],
    dateColors: [
      "bg-yellow-500",
      "bg-yellow-50",
      "text-yellow-800",
      "text-yellow-300",
    ],
  },
  {
    title: "Mentor/Photographer",
    subtitle: "HackUMass X",
    date: "Sept, 2022",
    content: [
      "During the 36-hour event, I was able to utilize my past experience (as a participant) and skills in Python, JavaScript to help guide the participants in their projects.",
      "I also took the advantage of this opportunity and my hobby for photography to take photos of the event.",
      "Many were so grateful for my help that they asked for a photo with me!",
    ],
    dateColors: [
      "bg-yellow-500",
      "bg-yellow-50",
      "text-yellow-800",
      "text-yellow-300",
    ],
  },
  {
    title: "Mentor",
    subtitle: "Hack(H)er413 2023",
    date: "Feb, 2023",
    content: [
      "After the success of HackUMass X and many positive feedback from participants, I decided to volunteer as a lead mentor for Hack(H)er413 2023 to help provide guidance and support to pro-women, pro-LGBTQ+ hackers.",
    ],
    dateColors: ["bg-pink-500", "bg-pink-50", "text-pink-800", "text-pink-300"],
  },
  {
    title: "Director of Technology of HackUMass XI",
    subtitle: "The pivotal point",
    date: "June, 2023",
    content: [
      "With the success of HackUMass X and the recognition of my mentoring efforts at Hack(H)er413 2023, I was promoted to the Director of Technology for HackUMass XI.",
      "Along with leading the technology team, I had a wonderful opportunity to work with multiple teams to help coordinate the event!",
    ],
    dateColors: [
      "bg-indigo-500",
      "bg-indigo-50",
      "text-indigo-800",
      "text-indigo-300",
    ],
  },
  {
    title: "Team Lead",
    subtitle: "Leadership",
    date: "Aug, 2023",
    content: [
      "Under my leadership, the team was able to successfully resolve more than 30 issues and implemented 10 new features creating a smooth experience for the participants to register and submit their projects.",
    ],
    dateColors: [
      "bg-indigo-500",
      "bg-indigo-50",
      "text-indigo-800",
      "text-indigo-300",
    ],
  },
  {
    title: "Mentor/Workshop Lead",
    subtitle: "HackUMass XI",
    date: "Sept, 2023",
    content: [
      "When the mentorship system failed to work, I took the initiative to become the light house for all of issues and questions from the participants.",
      "Before the system was fixed, I resolved around 60% of the issues related to ReactJS, Flask, and Firebase.",
      "Many were able to submit their projects on time and one even won the Best Security Hack!",
      "Confident in my ReactJS skills, I registered to lead a workshop on &quot;Introduction to ReactJS&quot; for more than 800 participants and it was a success!",
    ],
    dateColors: [
      "bg-indigo-500",
      "bg-indigo-50",
      "text-indigo-800",
      "text-indigo-300",
    ],
  },
  {
    title: "Co-Director of Technology",
    subtitle: "Hack(H)er413 2024",
    date: "Dec, 2024",
    content: [
      "In my role as Co-Director of Technology, I dedicated my utmost effort to facilitating the event coordination and offering guidance to the participants.",
    ],
    dateColors: ["bg-cyan-500", "bg-cyan-50", "text-cyan-800", "text-cyan-300"],
  },
  {
    title: "More Hackathons!!",
    subtitle: "Next step?",
    date: "????",
    content: [
      "I am looking forward to participating in more hackathons even after my graduation and possibly even start one of my own for underrepresented communities!",
    ],
    dateColors: ["bg-emerald-500", "bg-emerald-50", "text-emerald-800", "text-emerald-300"],
  },
];

type Props = {};

export default function Hackathons({}: Props) {
  return (
    <div className="relative text-white">
      <div className="absolute h-full bg-[url('/hackathon.png')] bg-cover w-full opacity-20 z-0"></div>
      <div className="py-20 md:py-10 w-full text-center">
        <p className="text-sm 2xl:text-base text-tighter leading-3">
          Co-Director
        </p>
        <h1 className="text-lg 2xl:text-2xl font-bold tracking-tight">
          @HackUMass & @Hack(H)er413
        </h1>
        <p className="text-sm 2xl:text-base text-tighter">
          June 2022 - PRESENT | Amherst, MA
        </p>
      </div>
      <div className="px-20">
        {EVENTS.map((event, index) => (
          <div key={index} className="relative pl-8 sm:pl-32 pb-52 group">
            {/* <!-- Purple label --> */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                x: { type: "spring", stiffness: 100 },
                opacity: { duration: 0.2 },
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="text-2xl mb-1 sm:mb-0"
            >
              {event.subtitle}
            </motion.div>
            {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
            <div
              className={`flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:${event.dateColors[0]} after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5`}
            >
              <time
                className={`sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 ${event.dateColors[2]} ${event.dateColors[1]} rounded-full`}
              >
                {event.date}
              </time>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  x: { type: "spring", stiffness: 100 },
                  opacity: { duration: 0.2 },
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className={`text-xl font-bold ${event.dateColors[3]}`}
              >
                {event.title}
              </motion.div>
            </div>
            {/* <!-- Content --> */}
            <motion.ul
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                x: { type: "spring", stiffness: 100 },
                opacity: { duration: 0.2 },
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              {event.content.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </div>
  );
}
