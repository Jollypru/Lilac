import { Geist, Geist_Mono, Poppins, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"]
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  subsets: ["latin"]
})



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

        <body
          className={` ${poppins.variable} ${lato.variable} ${geistSans.variable} ${geistMono.variable}  antialiased bg-[#faf6ec]`}
        >
          <Navbar></Navbar>
          <main className="min-h-fit">{children}</main>
          <Footer></Footer>
        </body>


    </html>
  );
}
