import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Services from "@/components/Services";
import Now from "@/components/Now";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ThemeToggle />
      <Navbar />
      <ScrollToTop />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Services />
        <Now />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
