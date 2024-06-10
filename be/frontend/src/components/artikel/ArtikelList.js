import React, { useState, useEffect } from "react";
import fetchData from "../FecthData";
import axios from "axios";
import { Link } from "react-router-dom";

const ArtikelList = () => {
  const [artikel, setArtikel] = useState([]);

  useEffect(() => {
    const fetchArtikel = async () => {
      try {
        const getArtikel = await fetchData(`http://localhost:5000/artikel`);
        setArtikel(getArtikel);
        console.log(getArtikel);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArtikel();
  }, []);

  const deleteArtikel = async (id_artikel) => {
    try {
      await axios.delete(`http://localhost:5000/artikel/${id_artikel}`);
      setArtikel(prevArtikel => prevArtikel.filter(item => item.id_artikel !== id_artikel)); // Update the state after deletion using the functional form of setState
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
        <Link to="/addArtikel" className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>Detail</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {artikel.map((artikel, index) => (
              <tr key={artikel.id_artikel}>
                <td>{index + 1}</td>
                <td>{artikel.judul_artikel}</td>
                <td>{artikel.detail_artikel}</td>
                <td>
                  <Link
                    to={`/editArtikel/${artikel.id_artikel}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteArtikel(artikel.id_artikel)}
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

export default ArtikelList;
