"use client";
import React from "react";
const EXPERIENCES = [
    {
        id: 1,
        title: "Mobile Engineering Intern",
        company: "Solomon Consulting Group, LLC",
        date: "May 2024 - Aug 2024",
        company_logo: "/solomon.jpg",
        description: [
            "Enabled households to access $100,000+ in savings through energy efficiency incentives and rebates by creating an online home energy assessment tool using data analytics and an advanced fuzzy keyword matching algorithm.",
            "Connected 500+ low-income households with 100+ minority-owned renewable energy businesses for energy-efficient home upgrades in Massachusetts, Georgia, and North Carolina by developing iOS- and Android-compatible mobile app using React Native.",
            "Crafted wire-frames for the platform leveraging Figma and findings from user research to improve user engagement and satisfaction.",
        ],
        images: [],
    },
    {
        id: 2,
        title: "Co-Founder",
        company: "Cocoon",
        date: "Jul 2021 - May 2024",
        company_logo: "/cocoon.jpg",
        description: [
            "Co-founded a social platform connecting socially-awkward individuals with personalized AI coaching for social skills improvement.",
            "Took on leading role in developing a full-stack application that is highly available and could scale to support 300+ active users.",
            "Attained 96.33% test coverage and 80% increase in development speed by implementing robust CI/CD pipeline and following test-driven development best practices.",
        ],
        images: [],
    },
    {
        id: 3,
        title: "Software Engineering Intern",
        company: "MassEnergize",
        date: "Jun 2023 - Sep 2023",
        company_logo: "massenergize.jpg",
        description: [
            "Improved accessibility and boosted community participation in climate actions by building the mobile version of the web-based dashboard application, compatible for both iOS and Android users.",
            "Reduced on-boarding time for future engineers by 75% by collaborating with the back-end team to create a comprehensive API documentation, detailing over 200 API endpoints, data models, system architectures.",
            "Resolved 10+ high-priority tickets in the back-end system, gaining proficiency in RESTful API development, and SDLC.",
        ],
        images: [],
    },
];
interface JobProp {
    id: number;
    title: string;
    company: string;
    company_logo: string;
    date: string;
    description: string[];
}
export default function Experiences() {
    return (
        <div className="relative text-white mx-10 lg:mx-40 py-8">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="flex flex-col gap-12">
                {EXPERIENCES.map((job: JobProp) => (
                    <div key={job.id} className="flex flex-col md:flex-row items-start md:space-x-8">
                        <img
                            src={job.company_logo}
                            alt={`${job.company} logo`}
                            className="w-24 h-24 object-cover rounded-full flex-shrink-0 mb-4 md:mb-0"
                        />
                        <div>
                            <h3 className="text-xl font-semibold">{job.title}</h3>
                            <p className="font-bold text-lg">{job.company}</p>
                            <p className="font-light text-sm text-gray-400 mb-4">{job.date}</p>
                            <ul className="list-disc list-inside space-y-2">
                                {job.description.map((text: string, index: number) => (
                                    <li key={index} className="leading-relaxed">
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
