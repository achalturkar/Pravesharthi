import { Geist, Poppins, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import TopUpButton from "@/components/TopUpButton/TopUpButton";
import Whatsapp from "@/components/Whatsapp/Whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pravesharthi - Education Consultancy ",
  description: "Nagpur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}  antialiased`}
      >
        <Navbar/>
        {children}
        <TopUpButton />
        <Whatsapp />
      </body>
    </html>
  );
}
