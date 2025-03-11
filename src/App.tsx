import "./App.css";
import Header from "@/layout/Header/Header";
import { Banner } from "@/layout/sections/Banner/Banner";
import { Skills } from "@/layout/sections/Skills/Skills";
import { Works } from "@/layout/sections/Works/Works";
import { Contacts } from "./layout/sections/Contacts/Contacts";
import { Footer } from "./layout/Footer/Footer";
import { GlobalStyles } from "./styles/Global.styled";
import { ScrollTop } from "./components/ScrollTop/ScrollTop";
import { Particle } from "./components/Particle/Particle";
import { Switchers } from "./components/Switchers/Switchers";
import { Suspense } from "react";

function App() {
  return (
    <div className="app">
      <Suspense fallback="loading">
        <GlobalStyles />
        <Particle />
        <Header />
        <Banner />
        <Skills />
        <Works />
        {/* <Testimony /> */}
        <Contacts />
        <Footer />
        <ScrollTop />
        <Switchers />
      </Suspense>
    </div>
  );
}

export default App;
