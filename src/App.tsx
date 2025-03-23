import "./App.css";

import { GlobalStyles } from "./styles/Global.styled";
import { ScrollTop } from "./components/ScrollTop/ScrollTop";

import { Suspense } from "react";
import { ThemeProvider } from "./styles/ThemeContext";
import { PageLoader } from "./widgets/PageLoader/PageLoader";
import { MainPage } from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import NotFounPage from "./pages/NotFounPage";
import Header from "./layout/Header/Header";
function App() {
  return (
    <div className="app">
      <Suspense fallback={<PageLoader />}>
        <ThemeProvider>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route
              path="/"
              element={<MainPage />}
            />
        
            <Route
              path="*"
              element={<NotFounPage />}
            />
          </Routes>

          <ScrollTop />
        </ThemeProvider>
      </Suspense>
    </div>
  );
}

export default App;
