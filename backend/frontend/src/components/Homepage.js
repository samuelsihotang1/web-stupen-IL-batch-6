import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
	return (
		<div className="columns mt-5">
			<div className="column is-half">
				<Link to={`/user`} className="button is-success">
					User
				</Link>
			</div>
		</div>
	);
};

export default Homepage;
