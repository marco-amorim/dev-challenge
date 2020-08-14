import React, { useState, useEffect } from 'react';

import defaultProductIcon from '../../assets/images/default-product.png';

import './styles.css';
import { useIsMounted } from '../../hooks/useIsMounted';

export interface Product {
	name: string;
	price: string;
	imageUrl: string;
	isOnCart: boolean;
}

interface ProductItemProps {
	product: Product;
	index: number;
	onCart?: boolean;
}

const ProductItem: React.FC<ProductItemProps> = ({
	product,
	index,
	onCart,
}) => {
	const [cartItems, SetCartItems] = useState<any>([]);
	const [isOnCart, setIsOnCart] = useState(false);
	const isMounted = useIsMounted();

	function handleAddToCart() {
		if (!product.isOnCart) {
			product.isOnCart = true;
			setIsOnCart(true);
			SetCartItems([...cartItems, product]);
		}
	}

	function handleRemoveFromCart() {
		SetCartItems([]);
		if (product.isOnCart) {
			product.isOnCart = false;
			setIsOnCart(false);
			JSON.parse(localStorage.getItem('cart') || '[]').map(
				(productItem: typeof product) => {
					if (!productItem.isOnCart) {
						SetCartItems([...cartItems, productItem]);
					}
				}
			);
		}
	}

	useEffect(() => {
		if (!isMounted) {
			try {
				localStorage.setItem('cart', JSON.stringify(cartItems));
				if (!product.isOnCart) {
					alert('Product removed from Cart!');
				} else {
					alert('Product added to Cart!');
				}
			} catch (error) {
				alert('Error, adding product to Cart!');
				console.log(error);
			}
		}
	}, [cartItems, isOnCart]);

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
								{onCart === false ? (
									<button onClick={handleAddToCart} className="mr-auto ml-0">
										Add to Cart
									</button>
								) : (
									<button
										onClick={handleRemoveFromCart}
										className="mr-auto ml-0"
									>
										Remove
									</button>
								)}
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
