"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

type Props = {};

const Sections = [
  {
    backgroundImage: "/background.jpg",
    backgroundOverlay: "bg-green-800",
    image: "/pic.jpg",
    imageHeight: "h-[400px]",
    imageWidth: "w-[600px]",
    fontColor: "white",
  },
  {
    backgroundImage: "/background1.jpg",
    backgroundOverlay: "bg-slate-900",
    image: "/pic1.jpg",
    imageHeight: "h-[400px]",
    imageWidth: "w-[400px]",
    fontColor: "white",
  },
  {
    backgroundImage: "/background2.jpg",
    backgroundOverlay: "bg-slate-900",
    image: "/pic2.jpg",
    imageHeight: "h-[400px]",
    imageWidth: "w-[600px]",
    fontColor: "white",
  },
{
    backgroundImage: "/back3.jpg",
    backgroundOverlay: "bg-yellow-900",
    image: "/dog.jpg",
    imageHeight: "h-[500px]",
    imageWidth: "w-[350px]",
    fontColor: "white",
  },
];

export default function Hero({}: Props) {
  const [sectionId, setSectionId] = React.useState(0);
  const [section, setSection] = React.useState(Sections[sectionId]);
  const [text, count] = useTypewriter({
    words: ["I'm a student", "I'm a soccer player", "I'm an aspiring SWE"],
    loop: true,
    delaySpeed: 1500,
  });

  const handleClick = () => {
    if (sectionId === Sections.length - 1) {
      setSectionId(0);
    } else {
      setSectionId(sectionId + 1);
    }
    setSection(Sections[sectionId]);
    console.log(sectionId, section);
  };

  return (
    <div
      className={`h-screen relative flex flex-row space-x-10 items-center justify-center mx-auto bg-stone-800 `}
    >
      {/* background */}
      <motion.img
        key={section.backgroundImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute h-full w-full object-cover"
        src={section.backgroundImage}
        alt="background"
      />

      {/* actual section */}
      <motion.img
        key={section.image}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1}}
        transition={{
          x: { type: "spring", stiffness: 100 },
          opacity: { duration: 0.2 },
          duration: 1,
        }}
        className={`relative ${section.imageHeight} ${section.imageWidth} object-cover rounded-md z-20`}
        src={section.image}
        alt="image"
      />
      <div className="space-y-5 z-20 text-white">
        <div>
          <h3 className="text-base tracking-tighter leading-3">
            Welcome to my portfolio
          </h3>
          <h1 className="text-4xl font-bold tracking-tighter">
            I'm Khiem Nguyen!
          </h1>
        </div>
        <h1 className="text-xl lg:text-3xl font-semibold">
          <span>{text}</span>
          <Cursor />
        </h1>
        {/* <p className="tracking-tigher">
            Clicking next to learn more about me.
          </p> */}
        <div className="flex flex-row space-x-10 mt-auto tracking-tighter">
          <p className="underline underline-offset-8">Welcome</p>
          <p>Soccer</p>
          <p>Hackathons</p>
          <p>Photography</p>
        </div>
        <button onClick={handleClick}>Next</button>
      </div>
    </div>
  );
}
