"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
    return (
        <section id="contact" className="relative text-white mx-10 lg:mx-40 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-300 mb-8">
                I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex justify-center items-center gap-8">
                <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline text-xl font-semibold">
                    Email Me
                </a>
                {/* LinkedIn and GitHub are inferred from common portfolio needs */}
                <a href="https://linkedin.com/in/ntdkhiem" target="_blank" rel="noopener noreferrer">
                    <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} />
                </a>
                <a href="https://github.com/ntdkhiem" target="_blank" rel="noopener noreferrer">
                    <Image src="/github.svg" alt="GitHub" width={32} height={32} />
                </a>
                {/* Placeholder for Instagram if user wants to include */}
                {/* <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
                    <Image src="/ig.svg" alt="Instagram" width={32} height={32} />
                </a> */}
            </div>
            <p className="text-sm text-gray-500 mt-16">&copy; {new Date().getFullYear()} Khiem Nguyen. All rights reserved.</p>
        </section>
    );
}
