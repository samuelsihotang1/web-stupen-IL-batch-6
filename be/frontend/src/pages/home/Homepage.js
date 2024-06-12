import React from 'react';
import Header from '../../components/header/Header.js';

const Homepage = () => {
    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <Header />
                <h2 className='mt-5' align="center">Hello <b>Admin</b>, ini Halaman Beranda</h2>
            </div>
        </div>
    );
};

export default Homepage;