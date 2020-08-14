import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import ProductItem from '../../components/ProductItem';

const Products = () => {
	const localStorageData = localStorage.getItem('products');

	return (
		<React.Fragment>
			<PageHeader />
			<div className="container py-5 products-list">
				{localStorageData
					? JSON.parse(localStorageData).map((product: any, index: any) => {
							return (
								<ProductItem product={product} index={index} onCart={false} />
							);
					  })
					: null}
			</div>
		</React.Fragment>
	);
};

export default Products;
