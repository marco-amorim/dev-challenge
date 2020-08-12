import React, { FormEvent, useState, useEffect, useCallback } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import './styles.css';
import shoppingCartIcon from '../../assets/images/shopping-cart.png';
import PageHeader from '../../components/PageHeader/PageHeader';
import { useIsMounted } from '../../hooks/useIsMounted';

const defaultMaskOptions = {
	prefix: '',
	suffix: '',
	includeThousandsSeparator: true,
	thousandsSeparatorSymbol: ',',
	allowDecimal: true,
	decimalSymbol: '.',
	decimalLimit: 2,
	integerLimit: 7,
	allowNegative: false,
	allowLeadingZeroes: false,
};

const RegisterProducts = () => {
	const [name, setName] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [price, setPrice] = useState('');
	const initialStorageValue = localStorage.getItem('products') || [];
	const [products, setProducts] = useState<any>(initialStorageValue);
	const isMounted = useIsMounted();

	const currencyMask = createNumberMask(defaultMaskOptions);

	function handleCreateProduct(e: FormEvent) {
		e.preventDefault();

		const product = {
			name,
			price,
			imageUrl,
		};

		setProducts([...products, product]);
	}

	useEffect(() => {
		if (!isMounted) {
			localStorage.setItem('prodcuts', JSON.stringify(products));
		}
	}, [products]);

	return (
		<React.Fragment>
			<PageHeader />
			<div className="register-product">
				<img src={shoppingCartIcon} alt="Logo Mission Shop" />
				<form onSubmit={handleCreateProduct}>
					<fieldset>
						<legend>Product Name</legend>
						<input
							name="name"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</fieldset>

					<fieldset>
						<legend>Product Price</legend>
						<MaskedInput
							name="price"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							mask={currencyMask}
						/>
					</fieldset>

					<fieldset>
						<legend>Product Image URL</legend>
						<input
							name="imageUrl"
							type="text"
							value={imageUrl}
							onChange={(e) => setImageUrl(e.target.value)}
						/>
					</fieldset>
					<fieldset>
						<button type="submit">Register Product</button>
					</fieldset>
				</form>
			</div>
		</React.Fragment>
	);
};

export default RegisterProducts;
