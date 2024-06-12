import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header/Header.js";

const EditProduk = () => {
  const [nama_produk, setNamaProduk] = useState("");
  const [harga_produk, setHargaProduk] = useState("");
  const [deskripsi_produk, setDeskripsiProduk] = useState("");

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id_produk } = useParams();

  useEffect(() => {
    const getProdukById = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/produk/${id_produk}`);
        const responseData = response.data.data;

        console.log("Response Data:", responseData);

        if (responseData && responseData.length > 0) {
          const product = responseData[0];
          setNamaProduk(product.nama_produk);
          setHargaProduk(product.harga_produk);
          setDeskripsiProduk(product.deskripsi_produk);
          // console.log(product.nama_produk);
          // console.log(product.harga_produk);
          // console.log(product.deskripsi_produk);
        } else {
          setError("Product data not found.");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
        setError("Failed to fetch product data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getProdukById();
  }, [id_produk]);

  const updateProduk = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`http://localhost:5000/produk/${id_produk}`, {
        nama_produk,
        harga_produk,
        deskripsi_produk,
      });

      navigate("/listProduk");
    } catch (error) {
      console.error("Error updating product:", error);
      setError("Failed to update product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Header />
        {error && <p className="notification is-danger">{error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={updateProduk}>
            <div className="field">
              <label className="label">Nama Produk</label>
              <div className="control">
                <input type="text" className="input" value={nama_produk} onChange={(e) => setNamaProduk(e.target.value)} placeholder="Nama Produk" />
              </div>
            </div>
            <div className="field">
              <label className="label">Harga</label>
              <div className="control">
                <input type="text" className="input" value={harga_produk} onChange={(e) => setHargaProduk(e.target.value)} placeholder="Harga Produk" />
              </div>
            </div>
            <div className="field">
              <label className="label">Deskripsi</label>
              <div className="control">
                <input type="text" className="input" value={deskripsi_produk} onChange={(e) => setDeskripsiProduk(e.target.value)} placeholder="Deskripsi" />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-success" disabled={loading}>
                Update
              </button>
              <a href="/listProduk" className="button is-danger ml-3">Kembali</a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditProduk;
