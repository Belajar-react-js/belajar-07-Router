import Beranda from "./pages/Beranda";
import CekStunting from "./pages/CekStunting";
import Artikel from "./pages/Artikel";

import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/cekstunting" element={<CekStunting />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
