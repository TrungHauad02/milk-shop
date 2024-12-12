import { Footer } from "components/common/footer/Footer";
import { Header } from "components/common/header/Header";
import HeroSection from "../common/ui/heroSection/HeroSection";
import FeaturesSection from "./section/FeaturesSection";
import FeaturedProductsSection from "./section/FeaturedProductsSection";
import AboutSection from "./section/AboutSection";
import { textData } from "shared/textData/textData";

export default function Home() {
  const { title, description } = textData.home.heroSection;
  return (
    <div>
      <Header />
      <HeroSection title={title} description={description} />
      <FeaturesSection />
      <FeaturedProductsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
