import React, { useState } from "react";
import Header from "../../components/header/Header.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddArtikel = () => {
  const [judul_artikel, setJudulArtikel] = useState("");
  const [detail_artikel, setDetailArtikel] = useState("");
  const navigate = useNavigate();

  const saveArtikel = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/artikel", {
        judul_artikel,
        detail_artikel,
      });
      navigate("/listArtikel");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Header />
        <form onSubmit={saveArtikel}>
          <div className="field">
            <label className="label">Judul Artikel</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={judul_artikel}
                onChange={(e) => setJudulArtikel(e.target.value)}
                placeholder="Judul Artikel"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Detail</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={detail_artikel}
                onChange={(e) => setDetailArtikel(e.target.value)}
                placeholder="Detail Artikel"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArtikel;
