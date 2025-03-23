import { Particle } from "@/components/Particle/Particle";
import { Footer } from "@/layout/Footer/Footer";
import { Banner } from "@/layout/sections/Banner/Banner";
import { Contacts } from "@/layout/sections/Contacts/Contacts";
import { Skills } from "@/layout/sections/Skills/Skills";
import { Works } from "@/layout/sections/Works/Works";

export const MainPage = () => {
  return (
    <>
      <Particle />
      <Banner />
      <Skills />
      <Works />
      {/* <Testimony /> */}
      <Contacts />
      <Footer />
    </>
  );
};
