import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';
import UserList from './components/user/UserList';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />

				{/* User routes */}
				<Route path="/user" element={<UserList />} />
				<Route path="/user/add" element={<AddUser />} />
				<Route path="/user/edit/:id" element={<EditUser />} />
				{/* User routes */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
