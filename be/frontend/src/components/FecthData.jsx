import axios from "axios";

// Fungsi untuk mengambil data dari server
const fetchData = async (url, config) => {
  try {
    const response = await axios.get(url, config);
    return response.data; // Mengembalikan data dari respons
  } catch (error) {
    // Tangani kesalahan jika permintaan gagal
    console.error("Error fetching data:", error);
    throw new Error("Error fetching data"); // Dapat di-handle di komponen pemanggil
  }
};

export default fetchData;