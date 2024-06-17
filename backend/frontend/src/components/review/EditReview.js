import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditReview = () => {
	const [rate, setRate] = useState(1);
	const [description, setDescription] = useState('');
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		getReviewById();
	}, []);

	const updateReview = async (e) => {
		e.preventDefault();
		try {
			await axios.patch(`http://localhost:5000/reviews/${id}`, {
				rate,
				description,
			});
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	const getReviewById = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/reviews/${id}`);
			setRate(response.data.rate);
			setDescription(response.data.description);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={updateReview}>
					<div className="field">
						<label className="label">Rate</label>
						<div className="control">
							<input
								type="number"
								className="input"
								value={rate}
								onChange={(e) => setRate(e.target.value)}
								placeholder="Rate"
								min="1"
								max="5"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Description</label>
						<div className="control">
							<textarea
								className="textarea"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								placeholder="Description"></textarea>
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

export default EditReview;
