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
                className="flex flex-row items-center gap-5"
            >
                <a href="https://www.instagram.com/ntdkhiem" target="_blank">
                    <img src="/ig.svg" width="48" height="48" />
                </a>
                <a
                    href="https://www.linkedin.com/in/ntd-khiem/"
                    target="_blank"
                >
                    <img src="/linkedin.svg" width="48" height="48" />
                </a>
                <a href="https://github.com/ntdkhiem" target="_blank">
                    <img src="/github.svg" width="48" height="48" />
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
                    duration: 1.5,
                }}
                className="flex flex-row items-center text-white-300 cursor-pointer"
            >
                <a href="mailto:ntdkhiem@gmail.com" target="_blank">
                    <p className="text-white">ntdkhiem@gmail.com</p>
                </a>
            </motion.div>
        </header>
    );
}
