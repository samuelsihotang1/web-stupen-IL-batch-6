import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddCheckout = () => {
	const [id, setId] = useState(uuidv4());
	const [idUser, setIdUser] = useState('');
	const [idCarts, setIdCarts] = useState('');
	const [totalPrice, setTotalPrice] = useState('');
	const navigate = useNavigate();

	const saveCheckout = async (e) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:5000/checkout', {
				id,
				id_user: idUser,
				id_carts: JSON.parse(idCarts),
				total_price: totalPrice,
			});
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={saveCheckout}>
					<div className="field">
						<label className="label">User ID</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={idUser}
								onChange={(e) => setIdUser(e.target.value)}
								placeholder="User ID"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Cart IDs (JSON)</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={idCarts}
								onChange={(e) => setIdCarts(e.target.value)}
								placeholder='["cart_id1", "cart_id2"]'
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Total Price</label>
						<div className="control">
							<input
								type="number"
								step="0.01"
								className="input"
								value={totalPrice}
								onChange={(e) => setTotalPrice(e.target.value)}
								placeholder="Total Price"
							/>
						</div>
					</div>
					<div className="field">
						<button type="submit" className="button is-success">
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddCheckout;
