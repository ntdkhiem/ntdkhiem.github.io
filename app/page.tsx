"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MassEnergize from "@/components/experiences/MassEnergize";
import Cocoon from "@/components/experiences/Cocoon";

export default function Home() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory z-0">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section className="snap-center">
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
      </section>
      <section className="snap-start">
        <Cocoon />
      </section>
      <section className="snap-start">
        <MassEnergize />
      </section>
      <section className="snap-center">
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
      </section>
      <section className="snap-end">
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
      </section>
    </div>
  );
}
