import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Article from './pages/Article';
import Products from './pages/Products';

let isScriptLoaded = false;

function App() {
	useEffect(() => {
		if (!isScriptLoaded) {
			// Main Scripts
			const script = document.createElement('script');
			script.src = '/assets/js/main.js';
			script.async = true;
			document.body.appendChild(script);

			isScriptLoaded = true;

			return () => {
				document.body.removeChild(script);
			};
		}
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="article" element={<Article />} />
				<Route path="products" element={<Products />} />
                {/* <Route path="edit/:id" element={<EditUser />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
