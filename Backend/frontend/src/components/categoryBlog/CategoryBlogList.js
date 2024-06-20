import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryBlogList = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories();
	}, []);

	const getCategories = async () => {
		const response = await axios.get('http://localhost:5000/category-blogs');
		setCategories(response.data);
	};

	const deleteCategory = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/category-blogs/${id}`);
			getCategories();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5">
			<div className="column is-half">
				<Link to={`/category-blog/add`} className="button is-success">
					Add New Category
				</Link>

				<Link to="/" className="button is-success">
					Home
				</Link>
				<Link to="/checkout-cart" className="button is-success">
					Checkout Cart
				</Link>
				<Link to="/user" className="button is-success">
					User
				</Link>
				<Link to="/product" className="button is-success">
					Product
				</Link>
				<Link to="/image-product" className="button is-success">
					Image Product
				</Link>
				<Link to="/category-product" className="button is-success">
					Category Product
				</Link>
				<Link to="/review" className="button is-success">
					Review
				</Link>
				<Link to="/cart" className="button is-success">
					Cart
				</Link>
				<Link to="/checkout" className="button is-success">
					Checkout
				</Link>
				<Link to="/blog" className="button is-success">
					Blog
				</Link>
				<Link to="/comment-blog" className="button is-success">
					Comment Blog
				</Link>
				<table className="table is-striped is-fullwidth">
					<thead>
						<tr>
							<th>No</th>
							<th>ID Blog</th>
							<th>Category</th>
							<th>CreatedAt</th>
							<th>UpdatedAt</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{categories.map((category, index) => (
							<tr key={category.id_blog}>
								<td>{index + 1}</td>
								<td>{category.id_blog}</td>
								<td>{category.category}</td>
								<td>{category.created_at}</td>
								<td>{category.updated_at}</td>
								<td>
									<Link
										to={`/category-blog/edit/${category.id}`}
										className="button is-small is-info mr-2">
										Edit
									</Link>
									<button
										onClick={() => deleteCategory(category.id)}
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

export default CategoryBlogList;