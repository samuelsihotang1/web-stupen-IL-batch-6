import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';

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
				{/* <Route path="add" element={<AddUser />} />
                <Route path="edit/:id" element={<EditUser />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
