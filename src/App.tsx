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

function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
