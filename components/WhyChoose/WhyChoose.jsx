import Image from "next/image";
import HandleMove from "../HandleMove/HandleMove";

const WhyChoose = ({ img, opt, head }) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-6 px-4 md:px-20 lg:px-32 mt-6">

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
                <Image
                    src={img}
                    alt="Why Choose Us Image"
                    width={350}
                    height={350}
                    className="rounded-xl"
                />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 space-y-4 p-2">
                <h1 className="text-2xl font-bold">{head}</h1>
                <HandleMove />

                <ul className="list-disc list-inside space-y-2">
                    {opt.map((each, index) => (
                        <li key={index} className="text-md font-semibold text-gray-700">
                            {each.choose}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default WhyChoose;
