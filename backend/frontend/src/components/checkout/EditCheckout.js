import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditCheckout = () => {
	const [idCarts, setIdCarts] = useState('');
	const [totalPrice, setTotalPrice] = useState('');
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		getCheckoutById();
	}, []);

	const updateCheckout = async (e) => {
		e.preventDefault();
		try {
			await axios.patch(`http://localhost:5000/checkout/${id}`, {
				id_carts: idCarts,
				total_price: totalPrice,
			});
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	const getCheckoutById = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/checkout/${id}`);
			setIdCarts(response.data.id_carts);
			setTotalPrice(response.data.total_price);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={updateCheckout}>
					<div className="field">
						<label className="label">Carts</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={idCarts}
								onChange={(e) => setIdCarts(e.target.value)}
								placeholder="Carts IDs (JSON format)"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Total Price</label>
						<div className="control">
							<input
								type="number"
								className="input"
								value={totalPrice}
								onChange={(e) => setTotalPrice(e.target.value)}
								placeholder="Total Price"
								min="0"
								step="0.01"
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

export default EditCheckout;
