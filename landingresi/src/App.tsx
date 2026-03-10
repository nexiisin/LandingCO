import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "./pages/gestion-de-conjuntos/components/landing";
import LandingAsambleas from "./pages/gestion-de-asambleas/components/landing";
import ScrollToTop from "./pages/shared/components/ScrollToTop";
import Nexis from "./nexis";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Nexis />} />
        <Route path="/gestion-de-conjuntos" element={<Landing />} />
        <Route path="/gestion-de-asambleas" element={<LandingAsambleas />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;