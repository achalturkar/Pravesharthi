// components/TestimonialSlider.jsx
"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HandleMove from "../HandleMove/HandleMove";

const testimonials = [
  {
    quote:
      "Pravesharthi helped me find the perfect college for my MBA. The counselors were supportive and always available!",
    name: "Agnesh ",
    college: "YCCE",
  },
  {
    quote:
      "I was confused after my 12th, but their expert guidance cleared everything. I'm now in a top engineering college.",
    name: "Vikrant",
    college: "RCOEM, Nagpur",
  },
  {
    quote:
      "Thanks to Pravesharthi, my NEET counseling was hassle-free. I’m now pursuing BAMS with confidence.",
    name: "Vinod",
    college: "KDK Medical College",
  },
  {
    quote:
      "Thanks to Pravesharthi, I found the complete cutoff list of colleges in one place. It saved me hours of research!",
    name: "Rakesh",
    college: "Symbiosis College",
  },
  {
    quote:
      "Managing my daughter’s college search was stressful until we used Pravesharthi. Everything was clearly laid out — fees, courses, and scholarship options.", name: "Ankita",
    name: "Ankita",
    college: "VIIT Pune",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="bg-blue-50 py-12 px-4 text-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-3xl font-semibold  mb-2">
          What Students Say About Us
        </h2>
        <HandleMove />
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        breakpoints={{
          0: {
            slidesPerView: 1, // for mobile screens
          },
          768: {
            slidesPerView: 2, // for tablets and above
          },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white max-w-xl mx-auto p-8 rounded-xl shadow-lg mt-2">
              <p className="italic text-gray-700 mb-4">"{t.quote}"</p>
              <h4 className="font-bold text-blue-800">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.college}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
