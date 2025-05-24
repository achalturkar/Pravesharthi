import Link from "next/link";
import Image from "next/image";

const Card = ({ Detail }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4">
      {Detail.map((each, index) => (
        <li key={index}>
          <div
            className="p-4 flex flex-col justify-between bg-gray-50 rounded-lg shadow-lg hover:shadow-2xl hover:bg-white transition duration-300 h-full"
            data-aos="fade-up"
          >
            {/* Image */}
            <div className="flex justify-center mb-4 h-1/3">
              <Image
                src={each.img}
                alt="services"
                width={150}
                height={150}
                className="rounded"
              />
            </div>

            {/* Heading and Description */}
            <div className="space-y-2 h-1.5/3 ">
              <h1 className="font-bold text-xl text-blue-800 h-1/4 text-center">{each.head}</h1>
              <p className="text-md text-gray-700 h-3/4">{each.desc}</p>
            </div>

            {/* Optional Link */}
            <Link href="/services">
              <div className="mt-4 p-2 text-center font-semibold bg-blue-400 text-white rounded-full hover:bg-blue-500 h-0.5/3">
                Read More
              </div>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Card;
