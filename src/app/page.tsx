import HeroSection from "@/components/HeroSection";
import { Spotlight } from "@/components/ui/Spotlight";
import Footer from "@/components/Footer";
import BirthdayPage from "@/app/birthday-decoration/page";
import Anniversary from "@/app/anniversary-decoration/page"
import SpecialOccasionPage from "@/app/special-occasion-decorations/page"

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96]">
        {/* <h1 className="text-3xl text-center">Patan Decoration</h1> */}
        <Spotlight
          className="top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <HeroSection />
        <div className="">
          <h1 className="text-3xl font-bold ml-8 mt-4 mb-[-98px]">Birthday Decoration </h1>
          <BirthdayPage />
        </div>
        <div>
          <h1 className="text-3xl font-bold ml-8 mt-8 mb-[-98px]">Anniversary Decoration</h1>
          <Anniversary />
        </div>
        <div>
          <h1 className="text-3xl font-bold ml-8 mt-8 mb-[-98px]">Special Decoration</h1>
          <SpecialOccasionPage />
        </div>
        <Footer />
      </main>
    </>
  );
}
