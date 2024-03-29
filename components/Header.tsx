"use client";
import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.instagram.com/ntdkhiem/"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/ntd-khiem/"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/ntdkhiem"
          fgColor="white"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-white-300 cursor-pointer"
      >
        <Link href="#contact">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="white"
            bgColor="transparent"
          />
          {/* <p className="uppercase hidden md:inline-flex text-sm text-white-400">
            Get In Touch!
          </p> */}
        </Link>
      </motion.div>
    </header>
  );
}
