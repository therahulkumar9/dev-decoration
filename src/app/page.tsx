import HeroSection from "@/components/HeroSection";
import { Spotlight } from "@/components/ui/Spotlight";
import Footer from "@/components/Footer";
import BirthdayPage from "@/app/birthday-decoration/page";
import Anniversary from "@/app/anniversary-decoration/page"
import SpecialOccasionPage from "@/app/special-occasion-decorations/page"
import ImageSlider from "@/components/ImageSlider";


export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-black/[0.96]">
      {/* <h1 className="text-3xl text-center">Patan Decoration</h1> */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <HeroSection /> 
      <div className="">
      <h1 className="text-3xl font-bold ml-20  lg:mt-40 mt-10 mb-[-84px]">Birthday Decoration </h1>
<BirthdayPage/>
</div>
<div>
<h1 className="text-3xl font-bold mt-8 ml-20 mb-[-84px]">Anniversary Decoration</h1>
<Anniversary/>
</div>
<div>
<h1 className="text-3xl font-bold mt-8 ml-20 mb-[-84px]">Special Decoration</h1>
<SpecialOccasionPage/>
</div>
      <Footer />
    <ImageSlider/>
    </main>
    </>
  );
}
