import Image from "next/image";
import HandleMove from "../HandleMove/HandleMove";

const InfoSection = ({ img, head, subhead, info }) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-3  px-2 md:px-20 lg:px-32 mt-4 md:mx-20">

            <div className="w-full md:w-1/2 space-y-2 md:space-y-4 p-2 ">
                <h1 className="text-2xl font-bold">{head}</h1>
                <HandleMove />

                <h2 className="text-lg font-medium text-gray-600">{subhead}</h2>
                <p className="text-md text-gray-700">{info}</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <Image
                    src={img}
                    alt="info Image"
                    width={350}
                    height={350}
                    className="rounded-xl"
                    
                />
            </div>

        </div>



    );
};

export default InfoSection;
