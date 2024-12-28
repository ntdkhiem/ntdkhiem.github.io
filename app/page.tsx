"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hackathons from "@/components/Hackathons";
import Experiences from "@/components/Experiences";
export default function Home() {
    return (
        <div className="h-screen overflow-x-hidden overflow-y-scroll z-0">
            <section id="hero" className="relative snap-start">
                <div className="absolute w-full h-full">
                    <Header />
                </div>
                <Hero />
            </section>
            <div className="h-screen flex flex-col justify-center items-center text-white">
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-tighter leading-3"
                >
                    Let&apos;s talk about my
                </motion.p>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-[10px]"
                >
                    EXPERIENCES
                </motion.h1>
            </div>
            <Experiences />
            <Hackathons />
            <div className="h-screen flex flex-col justify-center items-center text-white">
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-tighter leading-3"
                >
                    Now, let&apos;s talk about my
                </motion.p>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-[10px]"
                >
                    PROJECTS
                </motion.h1>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-[10px] text-red-500"
                >
                    WORK IN PROGRESS
                </motion.h1>
            </div>
            <footer className="p-4 text-center">
                <span className="text-sm text-white">
                    © 2024{" "}
                    <a
                        href="https://flowbite.com"
                        className="hover:underline"
                        target="_blank"
                    >
                        Khiem Nguyen
                    </a>
                </span>
            </footer>
        </div>
    );
}
