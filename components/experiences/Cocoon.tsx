"use client";
import React from "react";
import { motion } from "framer-motion";
import { ReactOriginal } from "devicons-react";
import { PostmanOriginal } from "devicons-react";
import { FirebaseOriginal } from "devicons-react";
import { FigmaOriginal } from "devicons-react";

type Props = {};

export default function Cocoon({}: Props) {
  return (
    <div className="relative text-white snap-y snap-mandatory">
      <div className="absolute top-0 my-10 w-full text-center">
        <p className="text-base text-tighter leading-3">
          Co-Founder/Lead Programmer
        </p>
        <h1 className="text-2xl font-bold tracking-tight">@Cocoon</h1>
        <p className="text-base text-tighter">
          July 2023 - PRESENT | Amherst, MA
        </p>
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
              src="/cocoon-figma-design.png"
              className="relative h-[400px] w-[600px] object-fit rounded-md justify-self-end"
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
                <ReactOriginal size={50} />
                <PostmanOriginal size={50} />
                <FirebaseOriginal size={50} />
                <FigmaOriginal size={50} />
              </div>
              <p className="text-sm lg:text-lg tracking-tight mb-5">
                I took the lead in bringing to life a social platform tailored
                for socially awkward individuals, providing them a secure space
                to connect and practice socializing. Utilizing React Native, I
                crafted a visually appealing and user-friendly mobile UI,
                ensuring a seamless experience. Leveraging Google
                Firebase&apos;s cloud technologies, I built a robust and
                scalable backend infrastructure to support the platform&apos;s
                functionality. Witnessing the transformation of our idea into a
                tangible platform that fosters a supportive community for those
                seeking a comfortable space to enhance their social skills was
                immensely rewarding!
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="snap-center">
        <div className="h-screen flex flex-col justify-center items-center">
          <div className="grid grid-cols-5 gap-10">
            <div className="col-span-3 justify-self-end">
              <motion.img
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  x: { type: "spring", stiffness: 100 },
                  opacity: { duration: 0.2 },
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                src="/cocoon-award2.jpg"
                className="relative h-[400px] w-[600px] object-fit rounded-md"
              />
              <p className="max-w-[600px] text-sm lg:text-lg tracking-tight mb-5">
                We&apos;ve secured over $3000 in equity-free funding through
                participation in startup pitching competitions!
              </p>
              <p className="max-w-[600px] text-sm lg:text-lg tracking-tight mb-5">
                During our initial stage, we&apos;ve garnered over 50 positive
                feedbacks from teenagers and young adults with the launch of the
                app&apos;s MVP!
              </p>
            </div>
            <motion.img
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                x: { type: "spring", stiffness: 100 },
                opacity: { duration: 0.2 },
                duration: 0.5,
              }}
              viewport={{ once: true }}
              src="/cocoon-award.JPG"
              className="col-span-2 relative h-[500px] w-[400px] object-fit rounded-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
