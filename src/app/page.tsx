import Navbar from "@/components/ui/Navbar";
import StatsBar from "@/components/ui/StatsBar";
import Hero from "@/components/ui/Hero";
import HowItWorks from "@/components/ui/HowItWorks";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import FeaturedCampaigns from "@/components/ui/FeaturedCampaigns";
import RecentDonations from "@/components/ui/RecentDonations";
import CTASection from "@/components/ui/CTASection";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0d10] relative overflow-hidden">
      <ParticleBackground />
      <Navbar />
      <div className="pt-20">
        <StatsBar />
        <Hero />
        <HowItWorks />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 max-w-[1400px] mx-auto py-12">
          <RecentDonations />
        </div>
        <FeaturedCampaigns />
        <WhyChooseUs />
        <CTASection />
      </div>
    </div>
  );
}


