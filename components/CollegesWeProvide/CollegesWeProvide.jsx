"use client"; // if using Next.js App Router

import React from "react";
import HandleMove from "../HandleMove/HandleMove";

const colleges = [
    {
        name: "Pune University",
        image: "/spu.webp",
    },
    {
        name: "Nagpur University",
        image: "/ngpu.webp",
    },
    {
        name: "Private University",
        image: "/pu.webp",
    },
    {
        name: "Parul University",
        image: "/pau.webp",
    },

];

export default function CollegesWeProvide() {
    return (
        <section className="bg-white py-12 px-6 text-center">
            <div className="flex flex-col justify-center items-center">

                <h2 className="text-3xl font-bold">Colleges We Provide</h2>
                <HandleMove />
                <p className="text-gray-600 mb-10 max-w-xl mx-auto mt-2">
                    We guide students to top-tier institutions across India based on their interests, entrance results, and career goals.
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                {colleges.map((college, index) => (
                    <div key={index} className="max-w-xs w-full p-4 bg-blue-50 rounded-xl shadow hover:shadow-md transition">
                        <img
                            src={college.image}
                            alt={college.name}
                            className="h-24 mx-auto object-contain mb-4"
                        />
                        <h3 className="text-lg font-semibold text-blue-900">{college.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
