import Link from "next/link";
import Image from "next/image";

const Footer = () =>{

    return(

   <footer className="bg-blue-950 text-white py-10 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="flex flex-col justify-center items-center text-center">
            <Link href="/">
            <Image src="/pravesharthi.svg" alt="logo" width={150} height={150}/>
            
            </Link>
          <p>Your trusted admission partner for all education-related decisions.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-orange-300">Home</Link></li>
            <li><Link href="/aboutus" className="hover:text-orange-300">About Us</Link></li>
            <li><Link href="/services" className="hover:text-orange-300">Services</Link></li>
            <li><Link href="/collegeswecover" className="hover:text-orange-300">Colleges We Cover</Link></li>
            <li><Link href="/contactus" className="hover:text-orange-300">Contact</Link></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="font-semibold mb-3">Courses</h3>
          <ul className="space-y-2">
            <li>Engineering</li>
            <li>Medical</li>
            <li>Management</li>
            <li>Arts & Science</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p>Email: info@pravesharthi.com</p>
          <p>Phone: +91 9529972011</p>
          <p>Location: Nagpur, India</p>
        </div>
      </div>

      <div className="text-center mt-10 text-sm border-t border-white/20 pt-4">
        &copy; {new Date().getFullYear()} Pravesharthi. All rights reserved.
      </div>


        </footer>
    )
}

export default Footer;