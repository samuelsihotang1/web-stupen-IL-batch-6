const { query } = require("../database/Db");

const getPesanan = async (req, res) => {
  try {
    const result = await query("SELECT * FROM pesanan");
    return res.status(200).json({ data: result });
  } catch (error) {
    console.log(error);
  }
};

const getPesananById = async (req, res) => {
  const { id_pesanan } = req.params;
  try {
    const result = await query("SELECT * FROM pesanan where id_pesanan = ?", [id_pesanan]);
    return res.status(200).json({ data: result });
  } catch (error) {
    return res.status(400).json({ pesan: "Ada yang Salah", error });
  }
};

const addPesanan = async (req, res) => {
  console.log(req.body);
  const { user_id, id_produk, harga_produk, jumlah } = req.body;
  try {
    await query("INSERT INTO pesanan (user_id, id_produk, harga_produk, jumlah ) VALUES (?, ?, ?, ?)", [
      user_id,
      id_produk,
      harga_produk,
      jumlah
    ]);
    return res.status(200).json({
      pesan: "Penambahan Pesanan Berhasil",
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updatePesanan = async (req, res) => {
  const { user_id, id_produk, harga_produk, jumlah } = req.body;
  const { id_pesanan } = req.params;
  try {
    await query("UPDATE pesanan SET user_id = ? , id_produk = ? , harga_produk = ? , jumlah = ? where id_pesanan = ?", [
      user_id,
      id_produk,
      harga_produk,
      jumlah,
      id_pesanan
    ]);
    return res.status(200).json({
      pesan: "Perubahan Pesanan Berhasil",
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deletePesanan = async (req, res) => {
  const { id_pesanan } = req.params;
  try {
    await query("DELETE FROM pesanan where id_pesanan = ?", [id_pesanan]);
    return res.status(200).json({
      pesan: "Hapus Pesanan Berhasil",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPesanan,
  getPesananById,
  addPesanan,
  updatePesanan,
  deletePesanan,
};
