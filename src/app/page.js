import Image from "next/image";
import Banner from "../components/banner/Banner";
import AvailableCars from "../components/limitedCards/AvailableCars";
import ExtraSection from "../components/extraSection/ExtraSection";
import TestimonialSection from "../components/extraTestimonial/TestimonialSection";

export default function Home() {
  return (
    <div className="text-2xl text-center">
     
      <Banner></Banner>
      <AvailableCars></AvailableCars>
       <ExtraSection></ExtraSection>
       <TestimonialSection></TestimonialSection>
    
    </div>
  );
}
