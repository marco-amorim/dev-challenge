import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import RegisterProducts from './pages/RegisterProducts';
import ProductsList from './pages/Products';
import ShoppingCart from './pages/ShoppingCart';

const Routes = () => {
	return (
		<BrowserRouter>
			<Route path="/" exact component={Landing} />
			<Route path="/register" component={RegisterProducts} />
			<Route path="/products" component={ProductsList} />
			<Route path="/cart" component={ShoppingCart} />
		</BrowserRouter>
	);
};

export default Routes;
