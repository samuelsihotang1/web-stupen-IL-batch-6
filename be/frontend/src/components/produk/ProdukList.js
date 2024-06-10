import React, { useState, useEffect } from "react";
import fetchData from "../FecthData";
import axios from "axios";
import { Link } from "react-router-dom";

const ProdukList = () => {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    const fetchProduk = async () => {
      try {
        const getProduk = await fetchData(`http://localhost:5000/produk`);
        setProduk(getProduk);
        console.log(getProduk);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduk();
  }, []);

  const deleteProduk = async (id_produk) => {
    try {
      await axios.delete(`http://localhost:5000/produk/${id_produk}`);
      setProduk(prevProduk => prevProduk.filter(item => item.id_produk !== id_produk)); // Update the state after deletion using the functional form of setState
    } catch (error) {
      console.error("There was an error deleting the data!", error);
    }
  };


  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <div align="center">
          <a href="/" className="button is-primary mx-1">Home</a>
          <a href="/listUser" className="button is-primary mx-1">User</a>
          <a href="/listProduk" className="button is-primary mx-1">Produk</a>
          <a href="/listArtikel" className="button is-primary mx-1">Artikel</a>
        </div>
        <Link to="/addProduk" className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Produk</th>
              <th>Harga</th>
              <th>Deskripsi</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {produk.map((produk, index) => (
              <tr key={produk.id_produk}>
                <td>{index + 1}</td>
                <td>{produk.nama_produk}</td>
                <td>{produk.harga_produk}</td>
                <td>{produk.deskripsi_produk}</td>
                <td>
                  <Link
                    to={`/editProduk/${produk.id_produk}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduk(produk.id_produk)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProdukList;
