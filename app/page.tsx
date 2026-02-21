import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import ValuePillars from "@/components/ValuePillars";
import HowItWorks from "@/components/HowItWorks";
import LocalEdge from "@/components/LocalEdge";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SocialProofBar />
      <ValuePillars />
      <HowItWorks />
      <LocalEdge />
      <FAQ />
      <CTABanner />
      <Footer />
    </>
  );
}
