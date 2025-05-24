import Carousal from "@/components/Carousal/Carousal";
import HandleMove from "@/components/HandleMove/HandleMove";
import InfoSection from "@/components/InfoSection/InfoSection";
import Card from "@/components/Card/Card";
import Image from "next/image";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import TestimonialSlider from "@/components/Testimonial/TestimonialSlider";
import CollegesWeProvide from "@/components/CollegesWeProvide/CollegesWeProvide";
import CoursesWeOffer from "@/components/CoursesWeOffer/CoursesWeOffer";
export default function Home() {


  const hero = [
    {
      img: "/degree.webp",
      head: "Your Trusted Guide to College Admissions ",
      subhead: "",
      btn: "Admission Enquiry",
      link: "/contact"
    },
    {
      img: "/cp.jpg",
      head: "Your Trusted Guide to College Admissions ",
      subhead: "",
      btn: "Admission Enquiry",
      link: "/contact"
    },

  ]

  const service = [
    {
      img: "/s1.webp",
      head: "Admission Guidance",
      desc: "We guide you through the complete college admission process — from form filling to final seat allotment"
    },
    {
      img: "/s3.webp",
      head: "Career Counseling",
      desc: "Unsure what to choose after 12th or graduation? We help you discover the right stream or course that fits your aptitude"
    },
    {
      img: "/s5.webp",
      head: "College Selection",
      desc: "We help you shortlist colleges that match your preferences, budget, and academic record"
    },
    {
      img: "/s2.webp",
      head: "Application Assistance",
      desc: "Avoid errors. We help you fill applications correctly and keep track of deadlines"
    },
    {
      img: "/s4.webp",
      head: "Documentation",
      desc: "From SOPs to financial documents, we help you prepare everything you need for a strong application"
    },
  ]

  const choice = [
    {
      choose: "1-on-1 Admission Counseling"
    },
    {
      choose: "Expert Career Guidance"
    },

  ]


  return (
    <main>
      <Carousal Hero={hero} />



      <section className="my-16">
        <InfoSection img="/girl.webp"
          head="About Pravesharthi"
          subhead="Your Trusted Admission Partner"
          info="Pravesharthi is a student-focused education consultancy that helps you choose the right course, college, and career path. Whether you're looking for engineering, medical, management programs, we provide expert guidance, college selection support, and application assistance to ensure your admission journey is smooth and successful"

        />
      </section>

      <section className="my-16">

        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl font-bold ">Our Services </h1>
          <HandleMove />
          <p className="mx-2 md:mx-12 text-md font-semibold mb-2 md:mb-4 ">At Pravesharthi, we offer complete admission support — from choosing the right course and college to guiding you through applications, counseling, and entrance exams. With personalized attention and expert advice, we make your admission journey smooth, stress-free, and successful</p>
        </div>
        <Card Detail={service} />

      </section>

      <section>

        <CoursesWeOffer />
      </section>

      <section className="my-16">
        <WhyChoose img="/s1.webp" opt={[
          { choose: "Expert Guidance from Start to Finish" },
          { choose: "Personalized Admission Support" },
          { choose: "Wide Network of Colleges" },
          { choose: "College Shortlisting" },
          { choose: "Timely Updates on Exams & Cutoffs" },
          { choose: "100% Transparent Support" },
          { choose: "400+ Students Successfully Admitted" },
        ]} head="Why Choose Us?" />

      </section>

      <section className="my-16">

        <TestimonialSlider />

      </section>
      <section className="my-16">

        <CollegesWeProvide />

      </section>


    </main>
  );
}
