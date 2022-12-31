import Navbar from "./components/navbar_main";
import Footer from "./components/footer";
import Productdetail from "./components/productdetail";
import Main from "./components/main";
import Showparam from "./components/showparam";
import Fasilitas from "./components/fasilitas";
import { BrowserRouter as Router, Routes, Route, From } from "react-router-dom";
import Kunjungan from "./components/kunjungan";
import Penjualan from "./components/penjualan";
import Kritiksaran from "./components/kritiksaran";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/fasilitas/" element={<Fasilitas />} />
          <Route path="/penjualan&pembelian/" element={<Penjualan />} />
          <Route path="/kunjungan/" element={<Kunjungan />} />
          <Route path="/showparam/:id" element={<Showparam />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
