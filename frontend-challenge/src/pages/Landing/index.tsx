import React from 'react';

import './styles.css';

import shoppingCartIcon from '../../assets/images/shopping-cart.png';

const Landing = () => {
	return (
		<div className="landing-page d-flex flex-column">
			<img src={shoppingCartIcon} alt="Logo Mission Shop" className="mx-auto" />
			<h1>Welcome to Mission Shop!</h1>
		</div>
	);
};

export default Landing;
