import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
	useEffect(() => {
		// MAIN SCRIPT
		const mainScript = document.createElement('script');
		mainScript.src = '/assets/js/main.js';
		mainScript.async = true;

		document.body.appendChild(mainScript);
		return () => {
			document.body.removeChild(mainScript);
		};
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
