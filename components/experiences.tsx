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
    title: string;
    company: string;
    company_logo: string;
    date: string;
    description: [];
}
function CardSection({ jobs }) {
    return (
        <div className="flex gap-5 animate-linear mt-10">
            {jobs.map((job: JobProp) => (
                <div className="w-96 flex-shrink-0">
                    <img
                        src={job.company_logo}
                        className="w-full h-48 object-fill"
                    />
                    <h1 className="tracking-tight text-xl">{job.title}</h1>
                    <h1 className="font-bold">{job.company}</h1>
                    <h1 className="font-light">{job.date}</h1>
                    <ul className="list-disc list-inside">
                        {job.description.map((text: string) => (
                            <li className="leading-tight pt-3">{text}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
export default function Experiences() {
    return (
        <div className="relative text-white mx-10 lg:mx-40">
            <div className="min-h-screen max-w-full overflow-hidden">
                <div className="flex gap-5">
                    <CardSection jobs={EXPERIENCES} />
                    <CardSection jobs={EXPERIENCES} />
                </div>
            </div>
        </div>
    );
}
