import React, { FormEvent, useState, useEffect } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import './styles.css';
import shoppingCartIcon from '../../assets/images/shopping-cart.png';
import warningIcon from '../../assets/images/alert-octagon.svg';
import PageHeader from '../../components/PageHeader/PageHeader';
import { useIsMounted } from '../../hooks/useIsMounted';

const defaultMaskOptions = {
	prefix: '',
	suffix: '',
	includeThousandsSeparator: true,
	thousandsSeparatorSymbol: '.',
	allowDecimal: true,
	decimalSymbol: ',',
	decimalLimit: 2,
	integerLimit: 7,
	allowNegative: false,
	allowLeadingZeroes: false,
};

const RegisterProducts = () => {
	const isMounted = useIsMounted();
	const initialStorageValue = localStorage.getItem('products') || '[]';
	const [name, setName] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [price, setPrice] = useState('');
	const [isOnCart, setIsOnCart] = useState(false);
	const [products, setProducts] = useState<any>(
		JSON.parse(initialStorageValue)
	);

	const currencyMask = createNumberMask(defaultMaskOptions);

	function handleCreateProduct(e: FormEvent) {
		e.preventDefault();

		if (name && price && imageUrl) {
			const product = {
				name,
				price,
				imageUrl,
				isOnCart,
			};

			setProducts([...products, product]);
		}
	}

	useEffect(() => {
		if (!isMounted && name && price && imageUrl) {
			try {
				localStorage.setItem('products', JSON.stringify(products));
				alert('Product successfully registered!');
				setName('');
				setPrice('');
				setImageUrl('');
			} catch (error) {
				alert('Error, product not registered!');
				console.log(error);
			}
		}
		console.log(products);
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
						<div className="row">
							<div className="register-fill-form-warning">
								{!name || !price || !imageUrl ? (
									<div className="register-fill-form-icon">
										<img src={warningIcon} alt="" />
										Fill all items
									</div>
								) : null}

								<button
									type="submit"
									{...(name && price && imageUrl
										? { disabled: false }
										: { disabled: true })}
								>
									Register Product
								</button>
							</div>
						</div>
					</fieldset>
				</form>
			</div>
		</React.Fragment>
	);
};

export default RegisterProducts;
