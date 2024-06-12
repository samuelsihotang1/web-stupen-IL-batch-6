const { query } = require("../database/Db");

const getProduk = async (req, res) => {
  try {
    const result = await query("SELECT * FROM produk");
    console.log(result);
    return res.status(200).json(result);
    // return res.status(200).json({ data: { data: { data: result}} });
  } catch (error) {
    console.log(error);
  }
};

const getProdukById = async (req, res) => {
  const { id_produk } = req.params;
  try {
    const result = await query("SELECT * FROM produk where id_produk = ?", [id_produk]);
    return res.status(200).json({ data: result });
  } catch (error) {
    return res.status(400).json({ pesan: "ada yg salah", error });
  }
};

const addProduk = async (req, res) => {
  console.log(req.body);
  const { nama_produk, harga_produk, deskripsi_produk } = req.body;
  try {
    await query("INSERT INTO produk (nama_produk, harga_produk, deskripsi_produk) VALUES (?, ?, ?)", [nama_produk, harga_produk, deskripsi_produk]);
    return res.status(200).json({
      pesan: "penambahan Produk berhasil",
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProduk = async (req, res) => {
  const { nama_produk, harga_produk, deskripsi_produk } = req.body;
  const { id_produk } = req.params;
  try {
    await query("UPDATE produk SET nama_produk = ?, harga_produk = ?, deskripsi_produk = ? where id_produk = ?", [nama_produk, harga_produk, deskripsi_produk, id_produk]);
    return res.status(200).json({
      pesan: "perubahan Produk berhasil",
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduk = async (req, res) => {
  const { id_produk } = req.params;
  try {
    await query("DELETE FROM produk where id_produk = ?", [id_produk]);
    return res.status(200).json({
      pesan: "hapus Produk berhasil",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProduk,
  getProdukById,
  addProduk,
  updateProduk,
  deleteProduk,
};
