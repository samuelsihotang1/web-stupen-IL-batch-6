import { useState, memo } from 'react';
import classes from './Account.module.css';
import Footer from '../Footer';
import Header from '../Header';
import type { FC } from 'react';

interface Props {
  className?: string;
}

export const Account: FC<Props> = memo(function Account(props = {}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [alamat, setAlamat] = useState('');
  const [password, setPassword] = useState('');
  const [passwordBaru, setPasswordBaru] = useState('');
  const [konfirmasiPassword, setKonfirmasiPassword] = useState('');

  const handleSimpan = () => {
    // Logika untuk menyimpan data
  };

  const handleBatal = () => {
    // Logika untuk membatalkan perubahan
  };

  return (
    <>
      <Header />
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <div className={classes.kelolaAkun}>Kelola Akun</div>
          <div className={classes.pesanan}>Pesanan</div>
          <div className={classes.wishList}>WishList</div>
          <div className={classes.frame839}>
            <div className={classes.profil}>Profil</div>
            <div className={classes.alamat}>Alamat</div>
            <div className={classes.opsiPembayaran}>Opsi Pembayaran</div>
          </div>
          <div className={classes.frame840}>
            <div className={classes.pesananDikirim}>Pesanan dikirim</div>
            <div className={classes.pesananDibatalkan}>Pesanan dibatalkan</div>
          </div>
        </div>
        <div className={classes.mainContent}>
          <div className={classes.editProfile}>Edit Profile</div>
          <div className={classes.frame848}>
            <div className={classes.frame841}>
              <div className={classes.namaDepan}>Nama Depan</div>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Nama Depan"
                className={classes.placeboxInfo}
              />
            </div>
            <div className={classes.frame842}>
              <div className={classes.namaBelakang}>Nama Belakang </div>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Nama Belakang"
                className={classes.placeboxInfo}
              />
            </div>
          </div>
          <div className={classes.frame849}>
            <div className={classes.frame843}>
              <div className={classes.email}>Email</div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={classes.placeboxInfo}
              />
            </div>
            <div className={classes.frame844}>
              <div className={classes.alamat2}>Alamat </div>
              <input
                type="text"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="Alamat"
                className={classes.placeboxInfo}
              />
            </div>
          </div>
          <div className={classes.frame846}>
            <div className={classes.frame845}>
              <div className={classes.ubahPassword}>Ubah Password </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password Lama"
                className={classes.placeboxInfo}
              />
            </div>
            <input
              type="password"
              value={passwordBaru}
              onChange={(e) => setPasswordBaru(e.target.value)}
              placeholder="Password Baru"
              className={classes.placeboxInfo}
            />
            <input
              type="password"
              value={konfirmasiPassword}
              onChange={(e) => setKonfirmasiPassword(e.target.value)}
              placeholder="Konfirmasi Password"
              className={classes.placeboxInfo}
            />
          </div>
          <div className={classes.button}>
            <div className={classes.buttonWrapper}>
              <button onClick={handleSimpan} className={classes.viewAllProducts}>Simpan</button>
              <button onClick={handleBatal} className={classes.batalkan}>Batalkan</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
});

export default Account;
