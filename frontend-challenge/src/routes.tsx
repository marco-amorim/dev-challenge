import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import RegisterProducts from './pages/RegisterProducts';

const Routes = () => {
	return (
		<BrowserRouter>
			<Route path="/" exact component={Landing} />
			<Route path="/register" component={RegisterProducts} />
		</BrowserRouter>
	);
};

export default Routes;
