import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header.js";

const AddProduk = () => {
  const [nama_produk, setNamaProduk] = useState("");
  const [harga_produk, setHargaProduk] = useState("");
  const [deskripsi_produk, setDeskripsiProduk] = useState("");
  const navigate = useNavigate();

  const saveProduk = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/produk", {
        nama_produk,
        harga_produk,
        deskripsi_produk,
      });
      navigate("/listProduk");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Header />
        <form onSubmit={saveProduk}>
          <div className="field">
            <label className="label">Nama Produk</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama_produk}
                onChange={(e) => setNamaProduk(e.target.value)}
                placeholder="Nama Produk"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Harga</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={harga_produk}
                onChange={(e) => setHargaProduk(e.target.value)}
                placeholder="Harga"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Deskripsi Produk</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={deskripsi_produk}
                onChange={(e) => setDeskripsiProduk(e.target.value)}
                placeholder="Deskripsi Produk"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
            <a href="/listProduk" className="button is-danger ml-3">Kembali</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduk;
