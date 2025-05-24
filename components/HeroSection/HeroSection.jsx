
import Link from "next/link";
import Image from "next/image";


// 
const HeroSection = ({ title, subtitle, img }) => {
    return (
        <div className="h-60 bg-blue-300 object-fit  bg-cover bg-no-repeat mt-28 " >

            <div className="pl-8 md:pl-28 pt-8 flex font-semibold"  data-aos="fade-up">
                <Link href="/"><h1 className="font-bold text-orange-500 pr-1">Home </h1></Link> / <p className="pl-1"> {title} </p>
            </div>

            <div className="flex flex-col items-center justify-center"  data-aos="fade-up">
                <h1 className="text-4xl font-extrabold text-blue-950 pt-8 text-center">{title}</h1>
                <p className="text-lg font-semibold text-center">{subtitle}</p>
            </div>
        </div>
    );
};

export default HeroSection; 