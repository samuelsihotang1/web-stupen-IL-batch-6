import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryProductList = () => {
	const [categoryProducts, setCategoryProducts] = useState([]);

	useEffect(() => {
		getCategoryProducts();
	}, []);

	const getCategoryProducts = async () => {
		const response = await axios.get('http://localhost:5000/category_product');
		setCategoryProducts(response.data);
	};

	const deleteCategoryProduct = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/category_product/${id}`);
			getCategoryProducts();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5">
			<div className="column is-half">
				<Link to={`/category_product/add`} className="button is-success">
					Add New Category
				</Link>
				<table className="table is-striped is-fullwidth">
					<thead>
						<tr>
							<th>No</th>
							<th>Product ID</th>
							<th>Category</th>
							<th>Created At</th>
							<th>Updated At</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{categoryProducts.map((categoryProduct, index) => (
							<tr key={categoryProduct.id_product}>
								<td>{index + 1}</td>
								<td>{categoryProduct.id_product}</td>
								<td>{categoryProduct.category}</td>
								<td>{categoryProduct.created_at}</td>
								<td>{categoryProduct.updated_at}</td>
								<td>
									<Link
										to={`/category_product/edit/${categoryProduct.id_product}`}
										className="button is-small is-info mr-2">
										Edit
									</Link>
									<button
										onClick={() => deleteCategoryProduct(categoryProduct.id_product)}
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

export default CategoryProductList;
