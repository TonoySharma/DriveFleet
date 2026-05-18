import Image from "next/image";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="text-2xl text-center">
     
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
}
