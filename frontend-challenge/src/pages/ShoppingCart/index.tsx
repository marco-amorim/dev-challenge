import React from 'react';
import ProductsList from '../../components/ProductsList';
import PageHeader from '../../components/PageHeader/PageHeader';

const ShoppingCart = () => {
	return (
		<React.Fragment>
			<PageHeader />
			<ProductsList />
		</React.Fragment>
	);
};

export default ShoppingCart;
