import React from 'react';

import defaultProductIcon from '../../assets/images/default-product.png';
import ProductItem from '../ProductItem';

import './styles.css';

const localStorageData = localStorage.getItem('products');

const ProductsList = () => {
	return (
		<div className="container py-5 products-list">
			{localStorageData
				? JSON.parse(localStorageData).map((product: any, index: any) => {
						return <ProductItem product={product} index={index} />;
				  })
				: null}
		</div>
	);
};

export default ProductsList;
