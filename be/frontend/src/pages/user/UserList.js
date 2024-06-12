import React, { useState, useEffect } from "react";
import fetchData from "../../components/FecthData";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const getUser = await fetchData(`http://localhost:5000/user`);
        setUser(getUser);
        console.log(getUser);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  const deleteUser = async (user_id) => {
    try {
      await axios.delete(`http://localhost:5000/user/${user_id}`);
      setUser(prevUser => prevUser.filter(item => item.user_id !== user_id)); // Update the state after deletion using the functional form of setState
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
        <Link to="/addUser" className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>Nama</th>
              <th>No Telepon</th>
              <th>Alamat Lengkap</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr key={user.user_id}>
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td>{user.nama_lengkap}</td>
                <td>{user.no_telpon}</td>
                <td>{user.alamat_lengkap}</td>
                <td>
                  <Link
                    to={`/editUser/${user.user_id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.user_id)}
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

export default UserList;
