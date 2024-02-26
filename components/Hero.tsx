"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {};

const Sections = [
  {
    backgroundImage: "/background1.jpg",
    backgroundOverlay: "bg-slate-900",
    image: "/pic1.jpg",
    imageHeight: "h-[400px]",
    imageWidth: "w-[400px]",
    imageCaption: "Click the right arrow to learn more about me!",
    fontColor: "white",
    subtitle: "Welcome to my portfolio",
    title: "I'm Khiem Nguyen!",
    body: "",
  },
  {
    backgroundImage: "/background.jpg",
    backgroundOverlay: "bg-green-800",
    image: "/pic.jpg",
    imageHeight: "h-[400px]",
    imageWidth: "w-[600px]",
    imageCaption:
      "Intramural group photo after we won the quarterfinals. Credits: @larissa.zhu on Instagram",
    fontColor: "white",
    subtitle: "Favorite thing to do in my free time?",
    title: "Soccer!",
    body: "I've been playing soccer since I was 5 years old. I've played for my high school and intramural teams. I love the sport and the community it brings.",
  },
  {
    backgroundImage: "/background2.jpg",
    backgroundOverlay: "bg-slate-900",
    image: "/pic2.jpg",
    imageHeight: "h-[400px]",
    imageWidth: "w-[600px]",
    imageCaption:
      "Me hard at work before the open ceremony. Credits: @larissa.zhu on Instagram",
    fontColor: "white",
    subtitle: "I live to help others.",
    title: "I'm a mentor/oragnizer!",
    body: "I've been an organizer for HackUMass for the past 3 years. I've also been a mentor for the past 2 years. I love helping others and seeing them grow. I've learned so much from the community and I'm grateful for the experiences.",
  },
  {
    backgroundImage: "/back3.jpg",
    backgroundOverlay: "bg-yellow-900",
    image: "/dog.jpg",
    imageHeight: "h-[500px]",
    imageWidth: "w-[350px]",
    imageCaption: '"Cutie Patootie Poodle"',
    fontColor: "white",
    subtitle: "Best thing I'm dabbling in:",
    title: "Photography!",
    body: "I've been taking photos for the past year. I love capturing moments and creating memories. I've been experimenting with different styles and techniques.",
  },
];

export default function Hero({}: Props) {
  const [sectionId, setSectionId] = React.useState(0);
  const [text, count] = useTypewriter({
    words: [
      "I'm a student",
      "I'm a soccer player",
      "I'm an aspiring Software Engineer",
    ],
    loop: true,
    delaySpeed: 1500,
  });

  const handlePrevClick = () => {
    if (sectionId === 0) {
      setSectionId(Sections.length - 1);
    } else {
      setSectionId(sectionId - 1);
    }
  };

  const handleNextClick = () => {
    if (sectionId === Sections.length - 1) {
      setSectionId(0);
    } else {
      setSectionId(sectionId + 1);
    }
  };

  return (
    <div className={`h-screen relative flex flex-row bg-stone-800`}>
      {/* background */}
      <motion.img
        key={Sections[sectionId].backgroundImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        className="absolute h-full w-full object-cover"
        src={Sections[sectionId].backgroundImage}
        alt="background"
      />

      {/* actual section */}
      <div className="w-full self-center z-20">
        <motion.img
          key={Sections[sectionId].image}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            x: { type: "spring", stiffness: 100 },
            opacity: { duration: 0.2 },
            duration: 0.5,
          }}
          className={`relative ${Sections[sectionId].imageHeight} ${Sections[sectionId].imageWidth} object-cover rounded-md ml-auto`}
          src={Sections[sectionId].image}
          alt="image"
        />
        <motion.p
          key={Sections[sectionId].imageCaption}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white tracking-tight text-end text-sm"
        >
          {Sections[sectionId].imageCaption}
        </motion.p>
      </div>
      <motion.div
        key={Sections[sectionId].title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full self-center align-center z-20 pl-10 pr-32"
      >
        <div className="space-y-5 z-20 text-white">
          <div>
            <h3 className="text-base tracking-tighter leading-3">
              {Sections[sectionId].subtitle}
            </h3>
            <h1 className="text-4xl font-bold tracking-tighter">
              {Sections[sectionId].title}
            </h1>
          </div>
          {sectionId === 0 ? (
            <h1 className="text-xl lg:text-3xl font-semibold">
              <span>{text}</span>
              <Cursor />
            </h1>
          ) : (
            <p className="text-sm lg:text-lg tracking-tight">
              {Sections[sectionId].body}
            </p>
          )}

          <div className="flex flex-row space-x-10 tracking-tighter">
            <p
              className={sectionId === 0 ? "underline underline-offset-8" : ""}
            >
              Welcome
            </p>
            <p
              className={sectionId === 1 ? "underline underline-offset-8" : ""}
            >
              Soccer
            </p>
            <p
              className={sectionId === 2 ? "underline underline-offset-8" : ""}
            >
              Hackathons
            </p>
            <p
              className={sectionId === 3 ? "underline underline-offset-8" : ""}
            >
              Photography
            </p>
          </div>
        </div>
      </motion.div>
      {/* <div className="absolute w-full flex flex-row justify-between bg-slate-500 z-30 px-10"> */}
      <button
        className="absolute h-full px-10 z-30 scale-50 hover:scale-100 transition duration-300 ease-in-out"
        onClick={handlePrevClick}
      >
        <ChevronLeftIcon className="h-12 w-12 text-white" />
      </button>
      <button
        className="absolute h-full right-0 px-10 z-30 scale-50 hover:scale-100 transition duration-300 ease-in-out"
        onClick={handleNextClick}
      >
        <ChevronRightIcon className="h-12 w-12 text-white" />
      </button>
      {/* <button onClick={handleClick}>Next</button> */}
      {/* </div> */}
    </div>
  );
}
