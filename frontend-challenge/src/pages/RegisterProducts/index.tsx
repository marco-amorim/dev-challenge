import React, { FormEvent } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import './styles.css';
import '../../assets/styles/glowing-button.css';
import shoppingCartIcon from '../../assets/images/shopping-cart.png';

const defaultMaskOptions = {
	prefix: 'R$',
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
	const currencyMask = createNumberMask(defaultMaskOptions);

	function handleCreateProduct(e: FormEvent) {
		e.preventDefault();
	}
	return (
		<div className="register-product">
			<img src={shoppingCartIcon} alt="Logo Mission Shop" />
			<form onSubmit={handleCreateProduct}>
				<fieldset>
					<legend>Product Name</legend>
					<input name="name" type="text" />
				</fieldset>

				<fieldset>
					<legend>Product Price</legend>
					<MaskedInput mask={currencyMask} />
				</fieldset>

				<fieldset>
					<legend>Product Image URL</legend>
					<input name="imageUrl" type="text" />
				</fieldset>
				<fieldset>
					<button className="glow-on-hover" type="submit">
						Registrar Produto
					</button>
				</fieldset>
			</form>
		</div>
	);
};

export default RegisterProducts;
