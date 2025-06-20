
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Benefits } from "@/components/landing/Benefits";
import { Testimonials } from "@/components/landing/Testimonials";
import { FerpaCompliance } from "@/components/landing/FerpaCompliance";
import { Pricing } from "@/components/landing/Pricing";
import { Footer } from "@/components/landing/Footer";
import { GradingPipeline } from "@/components/landing/GradingPipeline";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Benefits />
      <GradingPipeline />
      <Testimonials />
      <FerpaCompliance />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
