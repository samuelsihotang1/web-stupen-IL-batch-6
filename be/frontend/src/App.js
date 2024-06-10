import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
// User 
import UserList from "./components/user/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
// Produk
import ProdukList from "./components/produk/ProdukList";
import AddProduk from "./components/produk/AddProduk";
import EditProduk from "./components/produk/EditProduk";
// Artikel
import ArtikelList from "./components/artikel/ArtikelList";
import AddArtikel from "./components/artikel/AddArtikel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/listUser" element={<UserList />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="edit/:id" element={<EditUser />} />
        {/* Produk */}
        <Route path="/listProduk" element={<ProdukList />} />
        <Route path="/addProduk" element={<AddProduk />} />
        <Route path="/editProduk/:id_produk" element={<EditProduk />} />
        {/* Artikel */}
        <Route path="/listArtikel" element={<ArtikelList />} />
        <Route path="/addArtikel" element={<AddArtikel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
