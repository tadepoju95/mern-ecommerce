import React from 'react';
import ProductCard from './../ProductCard';
import headphones from './../../assets/shared/figma/image-removebg-preview(41).png';
import speakers from './../../assets/shared/figma/image-removebg-preview(38).png';
import earphones from './../../assets/shared/figma/image-removebg-preview(42).png';
import oval from './../../assets/shared/figma/Oval Copy 4.png';
import arrow from './../../assets/shared/desktop/icon-arrow-right.svg';



const ListOfProducts = () => {
	return (
		<section className="list-of-products container">
			<ProductCard image={headphones} ovalImage={oval} title="HEADPHONES" link="SHOP" arrowImage={arrow} names="nav-headphones-item" />
			<ProductCard image={speakers} ovalImage={oval} title="SPEAKERS" link="SHOP" arrowImage={arrow} names="nav-speakers-item" />
			<ProductCard image={earphones} ovalImage={oval} title="EARPHONES" link="SHOP" arrowImage={arrow} names="nav-earphones-item" />
		</section>
	)
}

export default ListOfProducts;