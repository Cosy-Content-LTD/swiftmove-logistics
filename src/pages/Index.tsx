import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import Services from "@/sections/Services";
import WhyUs from "@/sections/WhyUs";
import Process from "@/sections/Process";
import Coverage from "@/sections/Coverage";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/sections/Footer";

export default function Index() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <Process />
      <Coverage />
      <ContactSection />
      <Footer />
    </div>
  );
}
