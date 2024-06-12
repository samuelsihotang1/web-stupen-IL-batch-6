import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home/Homepage.js";
// User 
import UserList from "./pages/user/UserList.js";
// import AddUser from "./components/AddUser";
// import EditUser from "./components/EditUser";
// Produk
import ProdukList from "./pages/produk/ProdukList.js";
import AddProduk from "./pages/produk/AddProduk.js";
import EditProduk from "./pages/produk/EditProduk.js";
// Artikel
import ArtikelList from "./pages/artikel/ArtikelList.js";
import AddArtikel from "./pages/artikel/AddArtikel.js";
import EditArtikel from "./pages/artikel/EditArtikel.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/listUser" element={<UserList />} />
        {/* <Route path="/addUser" element={<AddUser />} />
        <Route path="edit/:id" element={<EditUser />} /> */}
        {/* Produk */}
        <Route path="/listProduk" element={<ProdukList />} />
        <Route path="/addProduk" element={<AddProduk />} />
        <Route path="/editProduk/:id_produk" element={<EditProduk />} />
        {/* Artikel */}
        <Route path="/listArtikel" element={<ArtikelList />} />
        <Route path="/addArtikel" element={<AddArtikel />} />
        <Route path="/editArtikel/:id_artikel" element={<EditArtikel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
