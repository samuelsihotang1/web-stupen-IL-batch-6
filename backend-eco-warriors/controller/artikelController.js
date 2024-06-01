const { query } = require("../database/Db");

const getArtikel = async (req, res) => {
  try {
    const result = await query("SELECT * FROM artikel");
    return res.status(200).json({ data: result });
  } catch (error) {
    console.log(error);
  }
};

const getArtikelById = async (req, res) => {
  const { id_artikel } = req.params;
  try {
    const result = await query("SELECT * FROM artikel where id_artikel = ?", [id_artikel]);
    return res.status(200).json({ data: result });
  } catch (error) {
    return res.status(400).json({ pesan: "ada yg salah", error });
  }
};

const addArtikel = async (req, res) => {
  console.log(req.body);
  const { judul_artikel, tanggal_artikel, detail_artikel } = req.body;
  try {
    await query("INSERT INTO artikel (judul_artikel, tanggal_artikel, detail_artikel) VALUES (?, ?, ?)", [
      judul_artikel,
      tanggal_artikel,
      detail_artikel
    ]);
    return res.status(200).json({
      pesan: "penambahan Artikel berhasil",
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateArtikel = async (req, res) => {
  const { judul_artikel, tanggal_artikel, detail_artikel } = req.body;
  const { id_artikel } = req.params;
  try {
    await query("UPDATE artikel SET judul_artikel = ?, tanggal_artikel = ?, detail_artikel = ? where id_artikel = ?", [
      judul_artikel,
      tanggal_artikel,
      detail_artikel,
      id_artikel
    ]);
    return res.status(200).json({
      pesan: "perubahan Artikel berhasil",
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteArtikel = async (req, res) => {
  const { id_artikel } = req.params;
  try {
    await query("DELETE FROM artikel where id_artikel = ?", [id_artikel]);
    return res.status(200).json({
      pesan: "hapus Artikel berhasil",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getArtikel,
  getArtikelById,
  addArtikel,
  updateArtikel,
  deleteArtikel,
};
