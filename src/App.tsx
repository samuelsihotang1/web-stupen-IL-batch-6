import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Article from './pages/Article';
import Homepage from './pages/Homepage';
import Products from './pages/Products';

const ScriptLoader = ({ src, onLoad }: { src: string; onLoad: () => void }) => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = src;
		script.async = true;
		script.onload = onLoad;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, [src, onLoad]);

	return null;
};

function AppJs() {
	const [isScriptLoaded, setIsScriptLoaded] = useState(false);

	const handleScriptLoad = () => {
		setIsScriptLoaded(true);
	};

	return (
		<>
			{!isScriptLoaded && (
				<ScriptLoader
					src="/assets/js/main.js"
					onLoad={handleScriptLoad}
				/>
			)}
			{isScriptLoaded && <App />}
		</>
	);
}

// let isScriptLoaded = false;

function App() {
	// useEffect(() => {
	// 	if (!isScriptLoaded) {
	// 		// Main Scripts
	// 		const script = document.createElement('script');
	// 		script.src = '/assets/js/main.js';
	// 		script.async = true;
	// 		document.body.appendChild(script);

	// 		isScriptLoaded = true;

	// 		return () => {
	// 			document.body.removeChild(script);
	// 		};
	// 	}
	// }, []);

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

export default AppJs;
