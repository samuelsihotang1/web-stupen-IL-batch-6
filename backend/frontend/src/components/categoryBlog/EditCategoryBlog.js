import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditCategoryBlog = () => {
	const [category, setCategory] = useState('');
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		getCategoryBlogById();
	}, []);

	const updateCategoryBlog = async (e) => {
		e.preventDefault();
		try {
			await axios.patch(`http://localhost:5000/category_blog/${id}`, { category });
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	const getCategoryBlogById = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/category_blog/${id}`);
			setCategory(response.data.category);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={updateCategoryBlog}>
					<div className="field">
						<label className="label">Category</label>
						<div className="control">
							<input
								type="text"
								className="input"
								value={category}
								onChange={(e) => setCategory(e.target.value)}
								placeholder="Category"
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

export default EditCategoryBlog;
