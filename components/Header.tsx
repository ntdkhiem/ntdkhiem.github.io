"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
    return (
        <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5 bg-transparent backdrop-blur-sm">
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
                    duration: 0.5,
                }}
                className="flex flex-row items-center gap-5"
            >
                <a href="https://www.instagram.com/ntdkhiem" target="_blank" className="text-oatmeal-light">
                    <Image src="/ig.svg" alt="Instagram Profile" width={36} height={36} />
                </a>
                <a
                    href="https://www.linkedin.com/in/ntd-khiem/"
                    target="_blank"
                    className="text-oatmeal-light"
                >
                    <Image src="/linkedin.svg" alt="LinkedIn Profile" width={36} height={36} />
                </a>
                <a href="https://github.com/ntdkhiem" target="_blank">
                    <Image src="/github.svg" alt="GitHub Profile" width={36} height={36} color={"#f5f5dc"} className="text-oatmeal-light" />
                </a>
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
                    duration: 0.5,
                }}
                className="flex flex-row items-center text-white-300 cursor-pointer"
            >
                <a href="mailto:ntdkhiem@gmail.com" target="_blank">
                    <p className="text-oatmeal-light">ntdkhiem@gmail.com</p>
                </a>
            </motion.div>
        </header>
    );
}
