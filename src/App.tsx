import "./App.css";
import Header from "@/layout/Header/Header";
import { Banner } from "@/layout/sections/Banner/Banner";
import { Skills } from "@/layout/sections/Skills/Skills";
import { Works } from "@/layout/sections/Works/Works";
import { Contacts } from "./layout/sections/Contacts/Contacts";
import { Footer } from "./layout/Footer/Footer";
import { GlobalStyles } from "./styles/Global.styled";
import { Testimony } from "./layout/sections/Testimony/Testimony";

function App() {
  return (
    <div className="app">
      <GlobalStyles />
      <Header />
      <Banner />
      <Skills />
      <Works />
      <Testimony />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
