import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "./pages/gestion-de-conjuntos/components/landing";
import Nexis from "./nexis";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nexis />} />
        <Route path="/gestion-de-conjuntos" element={<Landing />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;