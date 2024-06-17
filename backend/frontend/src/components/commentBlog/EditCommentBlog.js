import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditCommentBlog = () => {
	const [description, setDescription] = useState('');
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		getCommentBlogById();
	}, []);

	const updateCommentBlog = async (e) => {
		e.preventDefault();
		try {
			await axios.patch(`http://localhost:5000/comment_blog/${id}`, { description });
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	const getCommentBlogById = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/comment_blog/${id}`);
			setDescription(response.data.description);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="columns mt-5 is-centered">
			<div className="column is-half">
				<form onSubmit={updateCommentBlog}>
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

export default EditCommentBlog;
