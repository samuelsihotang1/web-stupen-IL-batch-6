import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditImageProduct = () => {
	const [image, setImage] = useState('');
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		getImageProductById();
	}, []);

	const updateImageProduct = async (e) => {
		e.preventDefault();
		try {
			await axios.patch(`http://localhost:5000/image_product/${id}`, { image });
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	const getImageProductById = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/image_product/${id}`);
			setImage(response.data.image);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={updateImageProduct}>
					<div className="field">
						<label className="label">Image</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={image}
								onChange={(e) => setImage(e.target.value)}
								placeholder="Image URL"
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

export default EditImageProduct;
