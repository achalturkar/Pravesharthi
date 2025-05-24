import Image from "next/image";

const data = [
  {
    title: "Admission Guidance",
    description:
      "We provide expert support throughout the entire admission journey — from understanding eligibility criteria, important deadlines, and institution-specific requirements to helping you create a personalized application roadmap. Our team ensures that students are well-informed about every step, including entrance exams, counseling rounds, reservation categories, and quota-based admissions. Whether you're applying to central universities, private colleges, or professional courses like engineering and medical, our detailed admission guidance helps avoid common mistakes and increases your chances of selection.",
    image: "/s1.webp",
    id:"#admission"
  },
  {
    title: "Career Counseling",
    description:
      "Choosing the right career path can shape your future success. At Pravesharthi, we offer professional career counseling sessions tailored to your unique interests, skills, and academic performance. Using psychometric testing, one-on-one mentorship, and real-world insights, we help students explore various domains — including traditional fields like engineering, medicine, commerce, and arts, as well as emerging areas such as data science, digital marketing, and design. Our counselors provide clarity and direction, ensuring that students make informed decisions aligned with their long-term goals.",
    image: "/s3.webp",
    id:"career"
  },
  {
    title: "College Selection",
    description:
      "With thousands of colleges available across India, choosing the right one can be confusing and time-consuming. We simplify this process by shortlisting the best-fit institutions based on your entrance exam scores, academic preferences, course interests, location, and budget. Our database includes verified college data such as cut-off trends, department rankings, faculty quality, campus facilities, and placement records. We help you compare institutions side-by-side, so you can confidently choose the college that aligns with your future plans and gives you the best return on your investment.",
    image: "/s5.webp",
    id:"college"
  },
  {
    title: "Application Assistance",
    description:
      "We offer complete support in filling out application forms for various entrance exams, scholarship schemes, and college admissions. This includes form-filling guidance, uploading of documents, fee payment support, and tracking submission status. Many students lose opportunities due to incorrect or incomplete applications — our team ensures that doesn’t happen. We also help in selecting the right combinations of courses and institutions, manage multiple applications, and meet all required deadlines on your behalf. With our guidance, you can focus on exam preparation while we take care of the paperwork.",
    image: "/s2.webp",
    id:"application"
  },
  {
    title: "Documentation Support",
    description:
      "Accurate and complete documentation is essential for every stage of the admission process. We assist students and parents in preparing and verifying all necessary documents including mark sheets, caste/category certificates, income proof, domicile certificates, transfer/migration certificates, gap year affidavits, and more. Our team also provides templates, format guidance, and verification tips to ensure your documents are accepted without rejection or delay. From digital uploads to offline submissions, we make sure your paperwork is flawless and compliant with institutional standards.",
    image: "/s4.webp",
    id:"documentation"
  },
];

export default function ServiceSection() {
  return (
    <section className="px-4 py-10 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="space-y-10">
        {data.map((each, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-md p-6 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : "" 
            }`}
            id={each.id}
          >
            <Image
              src={each.image}
              alt={each.title}
              width={350}
              height={350}
              className=" object-cover rounded-lg w-full md:w-1/2"
            />
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">{each.title}</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                {each.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
