import HeroSection from "@/components/HeroSection";
import { Spotlight } from "@/components/ui/Spotlight";
import Footer from "@/components/Footer";

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
      <Footer />
    </main>
    </>
  );
}
