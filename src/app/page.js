import Image from "next/image";
import NavBer from "../components/navber/NavBer";
import Banner from "../components/banner/Banner";

export default function Home() {
  return (
    <div className="text-2xl text-center">
      <NavBer></NavBer>
      <Banner></Banner>
    </div>
  );
}
