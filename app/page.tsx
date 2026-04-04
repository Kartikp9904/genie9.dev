import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080810]">
      <Navbar />
      <Hero />
      <TrustSection />
      <Services />
      <Process />
      <Projects />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
