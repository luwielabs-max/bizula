import Hero from "../../components/landing/sections/Hero";
import SocialProof from "../../components/landing/sections/SocialProof";
import BusinessTypes from "../../components/landing/sections/BusinessTypes";
import FeatureShowcase from "../../components/landing/sections/FeatureShowcase";
import BusinessEverywhere from "../../components/landing/sections/BusinessEverywhere";
import FreeUntilYouGrow from "../../components/landing/sections/FreeUntilYouGrow";
import FAQ from "../../components/landing/sections/FAQ";
import CTA from "../../components/landing/sections/CTA";
import Footer from "../../components/landing/sections/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">

      <Hero />

      <SocialProof />

      <BusinessTypes />

      <FeatureShowcase />

      <BusinessEverywhere />

      <FreeUntilYouGrow />

        <FAQ />

        <CTA />

        <Footer />

    </main>
  );
}