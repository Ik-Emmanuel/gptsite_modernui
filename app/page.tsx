import Brand from "@/components/Brand";
import Features from "@/components/Features";
import Gpt3 from "@/components/Gpt3";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Possibilities from "@/components/Possibilities";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <div className="">
        {/* brand§ */}
        <Brand />
        {/* whatsgpt3 */}
        <Gpt3 />
        {/* features */}
        <Features />
        {/* possibilities */}
        <Possibilities />
        {/* cta */}
        {/* blog */}
        {/* footer */}
      </div>
    </div>
  );
}
