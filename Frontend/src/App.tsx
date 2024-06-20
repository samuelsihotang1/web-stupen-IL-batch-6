import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Article from './pages/Article';
import Homepage from './pages/Homepage';
import { Login } from './components/Login/Login';
import Account from './components/Account/Account';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Products from './pages/Products';
import Products2 from './pages/Products2';
import Products3 from './pages/Products3';
import Products4 from './pages/Products4';
import AlatSekolah from './pages/AlatSekolah';
import Hiasan from './pages/Hiasan';
import Pupuk from './pages/Pupuk';
import Souvenir from './pages/Souvenir';
import DetailProduct from './pages/DetailProduct';
import DetailArtikel from './pages/DetailArtikel';
import Cart from './pages/Cart';
import Favorite from './pages/Favorite';

import { loadScripts } from './utils/loadScripts';


function App() {
	useEffect(() => {
		const scripts = ['/assets/js/main.js'];

		loadScripts(scripts);
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/login" Component={Login} />
				<Route path="/account" element={<Account/>} />
				<Route path="/signin" element={<SignIn/>} />
				<Route path="/signup" element={<SignUp/>} />
				<Route path="article" element={<Article />} />
				<Route path="products" element={<Products />} />
				<Route path="products2" element={<Products2 />} />
				<Route path="products3" element={<Products3 />} />
				<Route path="products4" element={<Products4 />} />
				<Route path="about" element={<About />} />
				<Route path="detailproduct" element={<DetailProduct />} />
				<Route path="detailartikel" element={<DetailArtikel />} />
				<Route path="cart" element={<Cart />} />
				<Route path="favorite" element={<Favorite />} />
				<Route path="alatsekolah" element={<AlatSekolah/>} />
				<Route path="souvenir" element={<Souvenir />} />
				<Route path="hiasan" element={<Hiasan/>} />
				<Route path="pupuk" element={<Pupuk />} />
				{/* <Route path="edit/:id" element={<EditUser />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
