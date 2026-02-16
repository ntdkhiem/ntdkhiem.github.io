"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hackathons from "@/components/Hackathons";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact"; // Import Contact component
import { Lora } from "next/font/google"; // Import Lora font
const lora = Lora({ weight: "700", subsets: ["latin"] });
export default function Home() {
    return (
        <div className="bg-oatmeal-light h-screen overflow-x-hidden overflow-y-scroll z-0">
            <section id="hero" className="relative snap-start">
                <div className="absolute w-full h-full">
                    <Header />
                </div>
                <Hero />
            </section>
            <section id="experiences" className="snap-start">
                <div className="h-screen flex flex-col justify-center items-center text-espresso-brown">
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
                        className={`text-2xl md:text-4xl lg:text-6xl font-bold tracking-[10px] ${lora.className}`}
                    >
                        EXPERIENCES
                    </motion.h1>
                </div>
                <Experiences />
                <Hackathons />
            </section>
            <section id="projects" className="snap-start">
                <div className="h-screen flex flex-col justify-center items-center text-espresso-brown">
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
                        className={`text-2xl md:text-4xl lg:text-6xl font-bold tracking-[10px] ${lora.className}`}
                    >
                        PROJECTS
                    </motion.h1>
                </div>
                <Projects />
            </section>
            <section id="contact" className="snap-start">
                <Contact /> {/* Render Contact component */}
            </section>
        </div>
    );
}
