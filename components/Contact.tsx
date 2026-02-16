"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Lora } from "next/font/google"; // Import Lora font
const lora = Lora({ weight: "700", subsets: ["latin"] });

export default function Contact() {
    return (
                <section id="contact" className="relative mx-10 lg:mx-40 py-16">
                    {/* Organic Abstract Shapes */}
                    <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-accent-sage rounded-full opacity-20 -z-10 blur-xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-oatmeal-light rounded-full opacity-30 -z-10 blur-2xl"></div>
        
                    <div className="bg-white p-8 rounded-xl shadow-scandi max-w-lg mx-auto text-center">
                        <h2 className={`text-3xl font-bold mb-4 text-espresso-brown ${lora.className}`}>Let&apos;s Connect & Collaborate.</h2>
                                        <p className="text-lg text-espresso-brown mb-8">
                                            Always open to discussing new opportunities, interesting projects, or just chatting about tech.
                                        </p>                        <div className="flex flex-col items-center gap-4">
                            <a href="mailto:your.email@example.com" className="bg-espresso-brown text-[#F8F5F0] py-3 px-6 rounded-xl hover:opacity-90 transition-opacity">
                                Email Me
                            </a>
                            <div className="flex justify-center items-center gap-8 text-espresso-brown">
                                <a href="https://linkedin.com/in/ntdkhiem" target="_blank" rel="noopener noreferrer">
                                    <Image src="/linkedin_espresso.svg" alt="LinkedIn" width={32} height={32} />
                                </a>
                                <a href="https://github.com/ntdkhiem" target="_blank" rel="noopener noreferrer">
                                    <Image src="/github_espresso.svg" alt="GitHub" width={32} height={32} />
                                </a>
                                <a href="https://www.youtube.com/@ntdkhiem" target="_blank" rel="noopener noreferrer">
                                    <Image src="/youtube.svg" alt="YouTube" width={32} height={32} />
                                </a>
                            </div>
                        </div>
                        <p className="text-sm text-espresso-brown mt-16">&copy; {new Date().getFullYear()} Khiem Nguyen. All rights reserved.</p>
                    </div>
                </section>
    );
}
