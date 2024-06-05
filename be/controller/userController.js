const { query } = require("../database/Db");

const getUser = async (req, res) => {
  try {
    const result = await query("SELECT * FROM user");
    return res.status(200).json({ data: result });
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  const { user_id } = req.params;
  try {
    const result = await query("SELECT * FROM user where user_id = ?", [user_id]);
    return res.status(200).json({ data: result });
  } catch (error) {
    return res.status(400).json({ pesan: "Ada yang Salah", error });
  }
};

const addUser = async (req, res) => {
  console.log(req.body);
  const { email, password, nama_lengkap, no_telpon, alamat_lengkap, kota, kode_pos } = req.body;
  try {
    await query("INSERT INTO user (email, password, nama_lengkap, no_telpon, alamat_lengkap, kota, kode_pos) VALUES (?, ?, ?, ?, ?, ?, ?)", [
      email,
      password,
      nama_lengkap,
      no_telpon,
      alamat_lengkap,
      kota,
      kode_pos
    ]);
    return res.status(200).json({
      pesan: "Penambahan User Berhasil",
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  const { email, password, nama_lengkap, no_telpon, alamat_lengkap, kota, kode_pos } = req.body;
  const { user_id } = req.params;
  try {
    await query("UPDATE user SET email = ? , password = ? , nama_lengkap = ? , no_telpon = ? , alamat_lengkap = ? , kota = ? , kode_pos = ?  where user_id = ?", [
      email,
      password,
      nama_lengkap,
      no_telpon,
      alamat_lengkap,
      kota,
      kode_pos,
      user_id
    ]);
    return res.status(200).json({
      pesan: "Perubahan User Berhasil",
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  const { user_id } = req.params;
  try {
    await query("DELETE FROM user where user_id = ?", [user_id]);
    return res.status(200).json({
      pesan: "Hapus User Berhasil",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUser,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
