import Link from "next/link";


const ServicesOption = () => {

    const Services = [
        {
            name: "Admission Guidance",
            id:"#admission"
        },
        {
            name: "Career Counseling",
             id:"#career"
        },
        {
            name: "College Selection",
             id:"#college"
        },
        {
            name: "Application Assistance",
             id:"#application"
        },
        {
            name: "Documentation Support",
             id:"#documentation"
        },
    ]

    return (
        <div className="flex flex-col md:flex-row flex-wrap hustify-center items-center">

            {
                Services.map((each, i) => (

                    <div key={i} className=" shadow-md hover:shadow-lg hover:bg-gray-100">
                        <Link href={each.id}><h1 className="text-xl font-bold text-blue-900 p-6">{each.name}</h1> </Link>
                    </div>
                ))
            }





        </div>
    )
}

export default ServicesOption;