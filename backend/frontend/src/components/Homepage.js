import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
	return (
		<div className="columns mt-5">
			<div className="column is-half">
				<Link to={`/user`} className="button is-success">
					User
				</Link>
				<Link to={`/product`} className="button is-success">
					Product
				</Link>
			</div>
		</div>
	);
};

export default Homepage;