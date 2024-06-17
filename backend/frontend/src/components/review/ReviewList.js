import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewList = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		getReviews();
	}, []);

	const getReviews = async () => {
		const response = await axios.get('http://localhost:5000/reviews');
		setReviews(response.data);
	};

	const deleteReview = async (idProduct, idUser) => {
		try {
			await axios.delete(`http://localhost:5000/reviews/${idProduct}/${idUser}`);
			getReviews();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5">
			<div className="column is-half">
				<Link to={`/reviews/add`} className="button is-success">
					Add New Review
				</Link>
				<table className="table is-striped is-fullwidth">
					<thead>
						<tr>
							<th>No</th>
							<th>Product ID</th>
							<th>User ID</th>
							<th>Rate</th>
							<th>Description</th>
							<th>Created At</th>
							<th>Updated At</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{reviews.map((review, index) => (
							<tr key={`${review.id_product}-${review.id_user}`}>
								<td>{index + 1}</td>
								<td>{review.id_product}</td>
								<td>{review.id_user}</td>
								<td>{review.rate}</td>
								<td>{review.description}</td>
								<td>{review.created_at}</td>
								<td>{review.updated_at}</td>
								<td>
									<Link
										to={`/reviews/edit/${review.id_product}/${review.id_user}`}
										className="button is-small is-info mr-2">
										Edit
									</Link>
									<button
										onClick={() => deleteReview(review.id_product, review.id_user)}
										className="button is-small is-danger">
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ReviewList;
