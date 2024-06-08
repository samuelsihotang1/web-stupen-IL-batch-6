import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduk = () => {
  const [nama_produk, setNamaProduk] = useState("");
  const [harga_produk, setHargaProduk] = useState("");
  const [deskripsi_produk, setDeskripsiProduk] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id_produk } = useParams();

  useEffect(() => {
    getProdukById();
  }, []);

  const updateProduk = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/produk/${id_produk}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama_produk,
          harga_produk,
          deskripsi_produk,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      navigate("/listProduk");
    } catch (error) {
      console.error("Error updating product:", error);
      setError("Failed to update product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getProdukById = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/produk/${id_produk}`);
      const responseData = response.data; // Access the response data
      setNamaProduk(responseData.nama_produk);
      setHargaProduk(responseData.harga_produk);
      setDeskripsiProduk(responseData.deskripsi_produk);
    } catch (error) {
      console.error("Error fetching product data:", error);
      setError("Failed to fetch product data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        {error && <p className="notification is-danger">{error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={updateProduk}>
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
                  placeholder="Harga Produk"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Deskripsi</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={deskripsi_produk}
                  onChange={(e) => setDeskripsiProduk(e.target.value)}
                  placeholder="Deskripsi"
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-success" disabled={loading}>
                Update
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditProduk;
