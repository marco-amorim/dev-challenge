import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';

const ProductsList = () => {
	return (
		<React.Fragment>
			<PageHeader />
			{localStorage.length}
		</React.Fragment>
	);
};

export default ProductsList;
