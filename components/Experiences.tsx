"use client";
import React from "react";
const EXPERIENCES = [
    {
        id: 1,
        title: "DevOps Software Engineer",
        company: "Solid State Scientific Corporation",
        date: "Mar 2025 - Present",
        description: [
            "Created build pipeline in Powershell for C++ distributed radar signal processing, saved team hours of compiling",
            "Designed and deployed 3 multi-zones, low-latency data ingestion pipelines, using Red Hat Enterprise Linux",
            "Deployed an internal knowledge base for 20+ engineers to AWS Elastic Kubernetes Service using Terraform and Helm",
            "Automated enterprise Jenkins controller creation using Config-as-Code, reduced creation time from 2 days to 15 mins",
            "Deployed monitoring and alerting system using AWS CloudWatch with custom metrics for proactive incident resolution",
        ],
        images: [],
    },
    {
        id: 2,
        title: "Software Engineer",
        company: "2Witech Solutions",
        date: "Jan 2025 - Mar 2025",
        description: [
            "Developed automating real-time detection and analysis of PFAS in water in Python, saved team 3 hours per running",
            "Solution processes time-series sensor data, applies data techniques to ensure accuracy, reliability in monitoring outcome",
        ],
        images: [],
    },
    {
        id: 3,
        title: "Co-Founder",
        company: "Cocoon",
        date: "Jul 2021 - Jan 2025",
        description: [
            "Delivered a social platform connecting social-anxious community for confidence-building journey with AI coaching",
            "Secured $3,000 in grant funding from startup pitching competitions.",
            "Led end-to-end system design, architecture decisions, and iterative prototyping across frontend, and backend",
        ],
        images: [],
    },
    {
        id: 4,
        title: "Software Engineer Intern",
        company: "Solomon Consulting Group",
        date: "May 2024 - Aug 2024",
        description: [
            "Built home energy analytics engine in Python, personalized recommendations from pool of $100k+ energy incentives",
            "Utilized Levenshtein distance algorithm, and statistical modeling on 10+ data points for energy consumption analysis",
            "Participated in peer-programming and weekly code review, learned Agile and best practices in software development",
        ],
        images: [],
    },
];
interface JobProp {
    id: number;
    title: string;
    company: string;
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
