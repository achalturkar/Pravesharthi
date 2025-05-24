import HeroSection from "@/components/HeroSection/HeroSection";
import Link from "next/link";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import InfoSection from "@/components/InfoSection/InfoSection";

const AboutUs = () =>{



    return(

        <main>
            
        
         <div className="h-60 bg-[url('/s4.webp')] object-fit  bg-cover bg-no-repeat mt-24 " >

            <div className="pl-8 md:pl-28 pt-8 flex font-semibold"  data-aos="fade-up">
                <Link href="/"><h1 className="font-bold text-blue-800 pr-1">Home </h1></Link> / <p className="pl-1 text-white"> About Us </p>
            </div>

            <div className="flex flex-col items-center justify-center"  data-aos="fade-up">
                <h1 className="text-4xl font-extrabold text-white pt-8 text-center">About Us</h1>
                <p className="text-lg font-semibold text-center text-white">“Empowering Students. Simplifying Admissions.”</p>
            </div>
        </div>


            <section className="my-20">
        <InfoSection img="/girl.webp"
          head="About Pravesharthi"
          subhead="Your Gateway to a Brighter Future"
          info="Pravesharthi is a student-focused education consultancy dedicated to simplifying the college admission process. We help students choose the right course and college based on their interests, strengths, and career goals. Whether you're applying for engineering, medical, management, or other programs, our expert counselors guide you every step of the way — from career counseling to final admission."
            info2="With a mission to empower students through informed decisions, Pravesharthi has successfully helped hundreds of students secure admission in reputed colleges across India. We combine personalized support, updated information, and a transparent process to ensure that every student finds the best path to their academic and professional future."
        />
      </section>


         <section className="my-20">
        <WhyChoose img="/s1.webp" opt={[
          { choose: " Career Counseling: Identify your interests, strengths, and goals with expert guidance." },
          { choose: "Course & College Selection: Find the best-fit course and college based on your profile." },
          { choose: "Application & Admission Assistance: From filling forms to handling documents, we simplify it all." }, 
          {  choose: "Entrance Exam Preparation Tips & Alerts: Stay informed and prepared for exams like JEE, NEET, CUET, and more."},
          {choose: "Interview Guidance & College Readiness: Be prepared for college interviews and life beyond school." },
        ]} head="What We Offer?" />

      </section>
        
        </main>
    )

}

export default AboutUs;