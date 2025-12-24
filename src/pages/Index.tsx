import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Benefits } from "@/components/Benefits";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Benefits />
      <Portfolio />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;