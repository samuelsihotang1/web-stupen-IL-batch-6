import React from 'react';

const Homepage = () => {
    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <div align="center">
                    <a href="/" className="button is-primary mx-1">Home</a>
                    <a href="/listUser" className="button is-primary mx-1">User</a>
                    <a href="/listProduk" className="button is-primary mx-1">Produk</a>
                    <a href="/listArtikel" className="button is-primary mx-1">Artikel</a>
                </div>
                <h2 className='mt-5' align="center">Hello <b>Admin</b>, ini Halaman Beranda</h2>
            </div>
        </div>
    );
};

export default Homepage;