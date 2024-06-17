import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditCart = () => {
	const [quantity, setQuantity] = useState(1);
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		getCartById();
	}, []);

	const updateCart = async (e) => {
		e.preventDefault();
		try {
			await axios.patch(`http://localhost:5000/cart/${id}`, { quantity });
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	const getCartById = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/cart/${id}`);
			setQuantity(response.data.quantity);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={updateCart}>
					<div className="field">
						<label className="label">Quantity</label>
						<div className="control">
							<input
								type="number"
								className="input"
								value={quantity}
								onChange={(e) => setQuantity(e.target.value)}
								placeholder="Quantity"
								min="1"
							/>
						</div>
					</div>
					<div className="field">
						<button type="submit" className="button is-success">
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditCart;
