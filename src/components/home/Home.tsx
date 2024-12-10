import { Footer } from "components/common/footer/Footer";
import { Header } from "components/common/header/Header";
import HeroSection from "./section/HeroSection";
import FeaturesSection from "./section/FeaturesSection";
import FeaturedProductsSection from "./section/FeaturedProductsSection";
import AboutSection from "./section/AboutSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <FeaturedProductsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
