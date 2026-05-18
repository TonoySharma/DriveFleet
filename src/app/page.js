import Image from "next/image";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import AvailableCars from "../components/limitedCards/AvailableCars";
import ExtraSection from "../components/extraSection/ExtraSection";

export default function Home() {
  return (
    <div className="text-2xl text-center">
     
      <Banner></Banner>
      <AvailableCars></AvailableCars>
       <ExtraSection></ExtraSection>
      <Footer></Footer>
    </div>
  );
}
