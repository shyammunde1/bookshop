import { HeroSection } from "../Home/componets/HeroSection";
import { FeaturedProduct } from "../Home/componets/FeaturedProduct";
import {Testimonials} from '../Home/componets/Testimonials'
import {Faq} from '../Home/componets/Faq'
import { useTitle } from "../../hook/useTitle";

export const HomePage = () => {
  useTitle('HomePage-eBook')
  return (
    <main>
      <HeroSection />
      <FeaturedProduct />
      <Testimonials />
      <Faq />
    </main>
  );
};
