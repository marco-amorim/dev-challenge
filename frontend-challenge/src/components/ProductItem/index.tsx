import React from 'react';

import defaultProductIcon from '../../assets/images/default-product.png';

import './styles.css';

export interface Product {
	name: string;
	price: string;
	imageUrl: string;
	isOnCart: string;
}

interface ProductItemProps {
  product: Product;
  index: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, index }) => {
	return (
		<div key={index} className="row product-item">
			<div className="col-lg-8 mx-auto">
				<ul className="list-group shadow">
					<li className="list-group-item bg-dark">
						<div className="media align-items-lg-center flex-column flex-lg-row p-3">
							<div className="media-body order-2 order-lg-1">
								<h2 className="mt-0 font-weight-bold mb-2">{product.name}</h2>
								<div className="d-flex align-items-center justify-content-between mt-1">
									<h5 className="font-weight-bold my-2">R$ {product.price}</h5>
								</div>
								<button className="mr-auto ml-0">Add to Cart</button>
							</div>
							<img
								src={product.imageUrl ? product.imageUrl : defaultProductIcon}
								alt="Product Image"
								width="200"
								className="ml-lg-5 order-1 order-lg-2"
							/>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProductItem;
