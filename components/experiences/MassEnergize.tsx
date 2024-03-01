"use client";
import React from "react";
import { motion } from "framer-motion";
import { PythonOriginal } from "devicons-react";
import { ReactOriginal } from "devicons-react";
import { PostmanOriginal } from "devicons-react";
import { FirebaseOriginal } from "devicons-react";
import { FigmaOriginal } from "devicons-react";
import { DjangoPlain } from "devicons-react";
import { PostgresqlOriginal } from 'devicons-react';

type Props = {};

export default function MassEnergize({}: Props) {
  return (
    <div className="relative text-white py-20 snap-y snap-mandatory">
      <div className="absolute top-0 my-20 w-full text-center">
        <p className="text-base text-tighter leading-3">
          Software Engineer Intern
        </p>
        <h1 className="text-2xl font-bold tracking-tight">@MassEnergize</h1>
      </div>

      <section className="snap-center">
        <div className="h-screen flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 gap-10">
            <motion.img
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                x: { type: "spring", stiffness: 100 },
                opacity: { duration: 0.2 },
                duration: 0.5,
              }}
              viewport={{ once: true }}
              src="/me-figma-design.png"
              className="relative h-[300px] w-[600px] object-fit rounded-md justify-self-end"
            />
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                x: { type: "spring", stiffness: 100 },
                opacity: { duration: 0.2 },
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h1 className="text-2xl font-bold">Mobile Application</h1>
              <div className="grid grid-cols-6 max-w-sm py-2">
                <PythonOriginal size={50} />
                <ReactOriginal size={50} />
                <PostmanOriginal size={50} />
                <FirebaseOriginal size={50} />
                <FigmaOriginal size={50} />
              </div>
              <p className="text-sm lg:text-lg tracking-tight mb-5">
                Working with a team of three, we designed and built a mobile app
                using a straightforward approach. Our goal was simple: create a
                cross-platform application to track carbon footprints and log
                climate actions. Following the agile methodology kept things
                organized and allowed us to adapt as needed. The highlight? The
                app is now in use by over 50 communities in Massachusetts,
                making the collective effort feel pretty rewarding. It's
                satisfying to see something we worked on actually making a
                difference in the real world.
              </p>
              <a
                href="https://me-doc.netlify.app/docs/guides/frontend-mobile-development/"
                target="_blank"
                className="text-white bg-green-800 py-2 px-4 rounded-md"
              >
                Check it out!
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="snap-end">
        <div className="h-screen flex flex-col justify-center items-center ">
          <div className="grid grid-cols-2 gap-10">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                x: { type: "spring", stiffness: 100 },
                opacity: { duration: 0.2 },
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="max-w-xl justify-self-end"
            >
              <h1 className="text-2xl font-bold">API Documentation</h1>
              <div className="grid grid-cols-6 max-w-sm py-2">
                <ReactOriginal size={50} />
                <DjangoPlain size={50} />
                <FirebaseOriginal size={50} />
                <PostgresqlOriginal size={50} />
              </div>
              <p className="text-sm lg:text-lg tracking-tight mb-5">
                I took the initiative to speed up the onboarding process by 80%,
                opting to engage in pair programming sessions with a senior
                developer. Together, we efficiently built comprehensive API
                documentation that covers more than 150 API endpoints, over 70
                database models, and outlines the request/response formats for
                backend, web, and mobile applications. This proactive approach
                not only facilitated a quicker onboarding for new team members
                but also ensured a clear understanding of our system's
                intricacies, promoting smoother collaboration and development
                across the board.
              </p>
              <a
                href="https://me-doc.netlify.app/docs/introduction"
                target="_blank"
                className="text-white bg-green-800 py-2 px-4 rounded-md"
              >
                Check it out!
              </a>
            </motion.div>
            <motion.img
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                x: { type: "spring", stiffness: 100 },
                opacity: { duration: 0.2 },
                duration: 0.5,
              }}
              viewport={{ once: true }}
              src="/me-api-documentation.png"
              className="relative h-[300px] w-[600px] object-fit rounded-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
