import React from 'react';

import './styles.css';

import shoppingCartIcon from '../../assets/images/shopping-cart.png';
import PageHeader from '../../components/PageHeader/PageHeader';

const Landing = () => {
	return (
		<React.Fragment>
			<PageHeader />
			<div className="landing-page d-flex flex-column">
				<img
					src={shoppingCartIcon}
					alt="Logo Mission Shop"
					className="mx-auto"
				/>
				<h1>Welcome to Mission Shop!</h1>
			</div>
		</React.Fragment>
	);
};

export default Landing;
