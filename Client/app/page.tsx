import NavBar from "./components/Homepage/navBar";
import HeroSection from "./components/Homepage/HeroSection";
import HomepageInfoSection from "./components/Homepage/HomepageInfoSection";
import ContactForm from "./components/Homepage/ContactForm";
import AboutUs from "./components/Homepage/AboutUs";
import Footer from "./components/Homepage/Footer";

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <NavBar /> 
      <HeroSection />
      <HomepageInfoSection />
      <AboutUs />
      <ContactForm />
      <Footer />
    </main>
  );
}
