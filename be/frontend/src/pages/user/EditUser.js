import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditArtikel = () => {
    const [judul_artikel, setJudulArtikel] = useState("");
    const [detail_artikel, setDetailArtikel] = useState("");

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id_artikel } = useParams();

    useEffect(() => {
        const getArtikelById = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:5000/artikel/${id_artikel}`);
                const responseData = response.data.data;

                console.log("Response Data:", responseData);

                if (responseData && responseData.length > 0) {
                    const article = responseData[0];
                    setJudulArtikel(article.judul_artikel);
                    setDetailArtikel(article.detail_artikel);
                } else {
                    setError("article data not found.");
                }
            } catch (error) {
                console.error("Error fetching article data:", error);
                setError("Failed to fetch article data. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        getArtikelById();
    }, [id_artikel]);

    const updateArtikel = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.put(`http://localhost:5000/artikel/${id_artikel}`, {
                judul_artikel,
                detail_artikel
            });

            navigate("/listArtikel");
        } catch (error) {
            console.error("Error updating article:", error);
            setError("Failed to update article. Please try again.");
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
                    <form onSubmit={updateArtikel}>
                        <div className="field">
                            <label className="label">Judul Artikel</label>
                            <div className="control">
                                <input type="text" className="input" value={judul_artikel} onChange={(e) => setJudulArtikel(e.target.value)} placeholder="Judul Artikel" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Detail Artikel</label>
                            <div className="control">
                                <input type="text" className="input" value={detail_artikel} onChange={(e) => setDetailArtikel(e.target.value)} placeholder="Detail Artikel" />
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

export default EditArtikel;
