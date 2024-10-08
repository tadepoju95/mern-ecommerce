import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard';
import hamburgerIcon from './../assets/shared/tablet/icon-hamburger.svg';
import logo from './../assets/shared/desktop/logo.svg';
import cartIcon from './../assets/shared/desktop/icon-cart.svg';
import headphones from './../assets/shared/figma/image-removebg-preview(41).png';
import speakers from './../assets/shared/figma/image-removebg-preview(38).png';
import earphones from './../assets/shared/figma/image-removebg-preview(42).png';
import oval from './../assets/shared/figma/Oval Copy 4.png';
import arrow from './../assets/shared/desktop/icon-arrow-right.svg';
import ProductList from './ProductList';




const Header = () => {
	

	
	return(
		<nav className="navbar navbar-expand-lg ">
			<hr className="mobile-hr" />
			<div className="container">
	     		<hr className="desktop-hr" />
	     	</div>
			<div className="collapse navbar-collapse" id="navbarNav">

				<ProductCard image={headphones} ovalImage={oval} title="HEADPHONES" link="SHOP" arrowImage={arrow} names="nav-headphones-item" />
				<ProductCard image={speakers} ovalImage={oval} title="SPEAKERS" link="SHOP" arrowImage={arrow} names="nav-speakers-item" />
				<ProductCard image={earphones} ovalImage={oval} title="EARPHONES" link="SHOP" arrowImage={arrow} names="nav-earphones-item" />

		    </div>
			<div className="container-md nav-container">
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
	     			<img className="fit-picture" src={hamburgerIcon} alt="hamburger icon" />
	     		</button>
	     		<img className="logo" src={logo} alt="audiophile logo" />
	     		<div className="nav-product-list">
	     		<ProductList listItem="HOME" />
	     		<ProductList listItem="HEADPHONES" />
	     		<ProductList listItem="SPEAKERS" />
	     		<ProductList listItem="EARPHONES" />
	     		</div>
	     		<img className="cart" src={cartIcon} alt="cart icon"  />
	     	</div>
    </nav>
	)
}


export default Header; 