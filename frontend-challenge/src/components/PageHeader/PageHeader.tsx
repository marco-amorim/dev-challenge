import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const PageHeader = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark page-header">
			<div>
				<Link to="/">Home</Link>
				<Link to="/register">Register</Link>
				<Link to="/products">Products</Link>
				<Link to="/cart">Cart</Link>
			</div>
		</nav>
	);
};

export default PageHeader;
