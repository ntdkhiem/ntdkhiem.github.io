"use client";
import React from "react";
import { motion } from "framer-motion";

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
        {/* <!-- Item #1 --> */}
        <div className="relative pl-8 sm:pl-32 pb-52 group">
          {/* <!-- Purple label --> */}
          <div className="text-2xl mb-1 sm:mb-0">The origin</div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-yellow-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-yellow-800 bg-yellow-50 rounded-full">
              June, 2022
            </time>
            <div className="text-xl font-bold text-yellow-300">
              An Organizer of HackUMass X
            </div>
          </div>
          {/* <!-- Content --> */}
          <ul className="space-y-2">
            <li>
              After being a participant for many hackathons in high school and
              winning a few, I decided to take the next step and become an
              organizer for HackUMass X !
            </li>
          </ul>
        </div>

        {/* <!-- Item #2 --> */}
        <div className="relative pl-8 sm:pl-32 pb-52 group">
          {/* <!-- Purple label --> */}
          <div className="text-2xl mb-1 sm:mb-0">Pre-HackUMass X</div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-yellow-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-yellow-800 bg-yellow-50 rounded-full">
              July, 2022
            </time>
            <div className="text-xl font-bold text-yellow-300">
              Developer/Maintainer of HackUMass X Website
            </div>
          </div>
          {/* <!-- Content --> */}
          <ul className="space-y-2">
            <li>
              In a team of 7 developers, we were tasked to maintain the website
              for HackUMass X.
            </li>
            <li>
              I was the first to resolve more than 15 issues for both the
              frontend and backend in just 2 weeks into the project!
            </li>
          </ul>
        </div>

        {/* <!-- Item #3 --> */}
        <div className="relative pl-8 sm:pl-32 pb-52 group">
          {/* <!-- Purple label --> */}
          <div className="text-2xl mb-1 sm:mb-0">HackUMass X</div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-yellow-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-yellow-800 bg-yellow-50 rounded-full">
              Sept, 2022
            </time>
            <div className="text-xl font-bold text-yellow-300">
              Mentor/Photographer
            </div>
          </div>
          {/* <!-- Content --> */}
          <ul className="space-y-2">
            <li>
              During the 36-hour event, I was able to utilize my past experience
              (as a participant) and skills in Python, JavaScript to help guide
              the participants in their projects.
            </li>
            <li>
              I also took the advantage of this opportunity and my hobby for
              photography to take photos of the event.
            </li>
            <li>
              Many were so grateful for my help that they asked for a photo with
              me!
            </li>
          </ul>
        </div>

        {/* <!-- Item #4 --> */}
        <div className="relative pl-8 sm:pl-32 pb-52 group">
          {/* <!-- Purple label --> */}
          <div className="text-2xl mb-1 sm:mb-0">Hack(H)er413 2023</div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-pink-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-pink-800 bg-pink-50 rounded-full">
              Feb, 2023
            </time>
            <div className="text-xl font-bold text-pink-300">Mentor</div>
          </div>
          {/* <!-- Content --> */}
          <ul className="space-y-2">
            <li>
              After the success of HackUMass X and many positive feedback from
              participants, I decided to volunteer as a lead mentor for
              Hack(H)er413 2023 to help provide guidance and support to
              pro-women, pro-LGBTQ+ hackers.
            </li>
          </ul>
        </div>

        {/* <!-- Item #4 --> */}
        <div className="relative pl-8 sm:pl-32 pb-52 group">
          {/* <!-- Purple label --> */}
          <div className="text-2xl mb-1 sm:mb-0">The pivotal point</div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-indigo-800 bg-indigo-50 rounded-full">
              June, 2023
            </time>
            <div className="text-xl font-bold text-indigo-300">
              Director of Technology of HackUMass XI
            </div>
          </div>
          {/* <!-- Content --> */}
          <ul className="space-y-2">
            <li>
              With the success of HackUMass X and the recognition of my
              mentoring efforts at Hack(H)er413 2023, I was promoted to the
              Director of Technology for HackUMass XI.
            </li>
            <li>
              Along with leading the technology team, I had a wonderful
              opportunity to work with multiple teams to help coordinate the
              event!
            </li>
          </ul>
        </div>

        {/* <!-- Item #4 --> */}
        <div className="relative pl-8 sm:pl-32 pb-52 group">
          {/* <!-- Purple label --> */}
          <div className="text-2xl mb-1 sm:mb-0">Leadership</div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-indigo-800 bg-indigo-50 rounded-full">
              Aug, 2023
            </time>
            <div className="text-xl font-bold text-indigo-300">Team Lead</div>
          </div>
          {/* <!-- Content --> */}
          <ul className="space-y-2">
            <li>
              Under my leadership, the team was able to successfully resolve
              more than 30 issues and implemented 10 new features creating a
              smooth experience for the participants to register and submit
              their projects.
            </li>
          </ul>
        </div>

        {/* <!-- Item #4 --> */}
        <div className="relative pl-8 sm:pl-32 pb-52 group">
          {/* <!-- Purple label --> */}
          <div className="text-2xl mb-1 sm:mb-0">HackUMass XI</div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-indigo-800 bg-indigo-50 rounded-full">
              Sept, 2023
            </time>
            <div className="text-xl font-bold text-indigo-300">
              Mentor/Workshop Lead
            </div>
          </div>
          {/* <!-- Content --> */}
          <ul className="space-y-2">
            <li>
              When the mentorship system failed to work, I took the initiative
              to become the light house for all of issues and questions from the
              participants.
            </li>
            <li>
              Before the system was fixed, I resolved around 60% of the issues
              related to ReactJS, Flask, and Firebase.
            </li>
            <li>
              Many were able to submit their projects on time and one even won
              the Best Security Hack!
            </li>
            <li>
              Confident in my ReactJS skills, I registered to lead a workshop on
              &quot;Introduction to ReactJS&quot; for more than 800 participants and it
              was a success!
            </li>
          </ul>
        </div>

        {/* <!-- Item #4 --> */}
        <div className="relative pl-8 sm:pl-32 pb-52 group">
          {/* <!-- Purple label --> */}
          <div className="text-2xl mb-1 sm:mb-0">Hack(H)er413 2024</div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-cyan-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-cyan-800 bg-cyan-50 rounded-full">
              Dec, 2024
            </time>
            <div className="text-xl font-bold text-cyan-300">
              Co-Director of Technology
            </div>
          </div>
          {/* <!-- Content --> */}
          <ul className="space-y-2">
            <li>
              In my role as Co-Director of Technology, I dedicated my utmost
              effort to facilitating the event coordination and offering
              guidance to the participants.
            </li>
          </ul>
        </div>

        {/* <!-- Item #4 --> */}
        <div className="relative pl-8 sm:pl-32 pb-52 group">
          {/* <!-- Purple label --> */}
          <div className="text-2xl mb-1 sm:mb-0">Next step?</div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-emerald-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-800 bg-emerald-50 rounded-full">
              ????
            </time>
            <div className="text-xl font-bold text-emerald-300">
              More Hackathon!!
            </div>
          </div>
          {/* <!-- Content --> */}
          <ul className="">
            <li>
              I am looking forward to participating in more hackathons even after my graduation and possibly even start one of my own for underrepresented communities!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
