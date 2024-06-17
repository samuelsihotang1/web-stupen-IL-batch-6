import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ImageProductList = () => {
	const [imageProducts, setImageProducts] = useState([]);

	useEffect(() => {
		getImageProducts();
	}, []);

	const getImageProducts = async () => {
		const response = await axios.get('http://localhost:5000/image_product');
		setImageProducts(response.data);
	};

	const deleteImageProduct = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/image_product/${id}`);
			getImageProducts();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5">
			<div className="column is-half">
				<Link to={`/image_product/add`} className="button is-success">
					Add New Image
				</Link>
				<table className="table is-striped is-fullwidth">
					<thead>
						<tr>
							<th>No</th>
							<th>Product ID</th>
							<th>Image URL</th>
							<th>Created At</th>
							<th>Updated At</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{imageProducts.map((imageProduct, index) => (
							<tr key={imageProduct.id_product}>
								<td>{index + 1}</td>
								<td>{imageProduct.id_product}</td>
								<td>{imageProduct.image}</td>
								<td>{imageProduct.created_at}</td>
								<td>{imageProduct.updated_at}</td>
								<td>
									<Link
										to={`/image_product/edit/${imageProduct.id_product}`}
										className="button is-small is-info mr-2">
										Edit
									</Link>
									<button
										onClick={() =>
											deleteImageProduct(imageProduct.id_product)
										}
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

export default ImageProductList;
