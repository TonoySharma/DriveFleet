import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navber/NavBer";
import Footer from "../components/footer/Footer";
import { Toaster } from "react-hot-toast";
// import AuthProvider from "../components/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Car Rental",
  description:
    "Experience the ultimate comfort and luxury with the best car rental service worldwide. Premium sports cars, luxury sedans, and SUVs at unbeatable prices.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar></NavBar>
      {/* <AuthProvider> */}
        <main>{children}</main>
      {/* </AuthProvider> */}
       <Footer></Footer>
        <Toaster />
        </body>
    </html>
  );
}
