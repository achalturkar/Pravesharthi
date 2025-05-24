"use client"; // Only if you're using Next.js App Router

import React from "react";
import { BookOpen, Briefcase, Stethoscope, Code, GraduationCap } from "lucide-react";
import HandleMove from "../HandleMove/HandleMove";

const courses = [
    { name: "Engineering (B.Tech / M.Tech)", icon: <Code className="h-8 w-8 text-blue-700" /> },
    { name: "Management (BBA / MBA)", icon: <Briefcase className="h-8 w-8 text-blue-700" /> },
    { name: "Medical (MBBS / BDS)", icon: <Stethoscope className="h-8 w-8 text-blue-700" /> },
    { name: "Law (LLB / LLM)", icon: <BookOpen className="h-8 w-8 text-blue-700" /> },
    { name: "Arts & Humanities", icon: <GraduationCap className="h-8 w-8 text-blue-700" /> },
    { name: "Computer Applications (BCA / MCA)", icon: <Code className="h-8 w-8 text-blue-700" /> },
];

export default function CoursesWeOffer() {
    return (
        <section className="bg-blue-50 py-12 px-4 text-center">
            <div className="flex flex-col justify-center items-center">    
                 <h2 className="text-3xl font-bold  ">Courses We Offer</h2>
                <HandleMove />
                <p className="text-gray-600 mb-10 max-w-2xl mx-auto mt-2">
                    Pravesharthi offers expert admission guidance for a wide range of undergraduate and postgraduate programs across India.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {courses.map((course, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-left flex items-start gap-4">
                        {course.icon}
                        <div>
                            <h3 className="text-lg font-semibold text-blue-900">{course.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
