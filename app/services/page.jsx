import HeroSection from "@/components/HeroSection/HeroSection";
import ServicesOption from "@/components/ServicesOptions/ServicesOption";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import Link from "next/link";

const Services = () => {

    return (

        <main>


            <div className="h-60 bg-[url('/s1.webp')] object-fit  bg-cover bg-no-repeat mt-24 " >

                <div className="pl-8 md:pl-28 pt-8 flex font-semibold" data-aos="fade-up">
                    <Link href="/"><h1 className="font-bold text-blue-800 pr-1">Home </h1></Link> / <p className="pl-1 text-white"> Our Services</p>
                </div>

                <div className="flex flex-col items-center justify-center" data-aos="fade-up">
                    <h1 className="text-4xl font-extrabold text-white pt-8 text-center">Our Services</h1>
                    <p className="text-lg font-semibold text-center text-white"> "Comprehensive Support for Every Step of Your Academic Journey."

</p>
                </div>
            </div>
            <section className="flex justify-center items-center">
                <ServicesOption />
            </section>

            <ServiceSection />


        </main>
    )
}

export default Services;