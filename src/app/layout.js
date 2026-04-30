import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PodCast from "@/components/shared/PodCast";



const poppins =Poppins({
  variable: "--font-poppins",
   subsets: ['latin'],
  weight: ['400','500','600','700']
})

export const metadata = {
  title: "Book Borrowing",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        <NavBar></NavBar>
        {children}
        <PodCast></PodCast>
        <Footer></Footer>
        </body>
    </html>
  );
}
