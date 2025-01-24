import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HottestSection from "@/components/HottestSection";
import LearnMoreSection from "@/components/LearnMoreSection ";
import Footer from "@/components/Footer";
import HottestSectionCarasoul from "@/components/HottestSectionCarasoul";
import LearnMoreSectionCarasoul from "@/components/LearnMoreSectionCarasoul";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-6xl  py-8">
      <div className=" md:mx-36 md:px-4 ">
        <HeroSection />
        </div>
        <div className="hidden mx-6 md:mx-36 px-4  md:block">
        <HottestSection />
        </div>
        <div className="block md:hidden ml-6">
        <HottestSectionCarasoul />
        </div>
        <div className="hidden mx-6 md:mx-36 px-4  md:block">
          <LearnMoreSection />
        </div>
        <div className="block ml-6 md:hidden">
        <LearnMoreSectionCarasoul />

        </div>
      </main>
      <Footer />
    </div>
  );
}
