import React from 'react';
import Header from './Header';
import MainContent from './home/MainContent';
import ListOfProducts from './home/ListOfProducts';



const Home = () => {
	return (
		<div>
			<Header />
			<MainContent />
			<ListOfProducts />
		</div>

	)
}

export default Home;