import React, {useState, useEffect} from 'react';
import hamburgerIcon from './../assets/shared/tablet/icon-hamburger.svg';
import logo from './../assets/shared/desktop/logo.svg';
import cartIcon from './../assets/shared/desktop/icon-cart.svg';
import headphones from './../assets/shared/figma/image-removebg-preview(41).png';
import speakers from './../assets/shared/figma/image-removebg-preview(38).png';
import earphones from './../assets/shared/figma/image-removebg-preview(42).png';
import oval from './../assets/shared/figma/Oval Copy 4.png';




const Header = () => {

	
	return(
		<nav className="navbar navbar-expand-lg ">
			<div className="collapse navbar-collapse" id="navbarNav">
				<div className="container">
		      	<ul className="navbar-nav">
		      		<img className="headphones nav-img" src={headphones} alt="headphones image" />
		      		<img className="oval" src={oval} alt="oval under headphones image" />
		       		<li className="nav-item headphones-item">
		         		<a className="nav-link active" aria-current="page" href="#">HEADPHONES</a>
		        	</li>
		        	<img className="speakers nav-img" src={speakers} alt="speakers image" />
		        	<img className="oval" src={oval} alt="oval under speakers image" />
			        <li className="nav-item speakers-item">
			          	<a className="nav-link" href="#">SPEAKERS</a>
			        </li>
			        <img className="earphones nav-img" src={earphones} alt="earphones image" />
			        <img className="oval" src={oval} alt="oval under earphones image" />
		        	<li className="nav-item">
		          		<a className="nav-link" href="#">EARPHONES</a>
		        	</li>
		      	</ul>
		      	</div>
		    </div>
			<hr className="mobile-hr" />
			<div className="container">
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	     			<img className="fit-picture" src={hamburgerIcon} alt="hamburger icon" />
	     		</button>
	     		<img className="logo" src={logo} alt="audiophile logo" />
	     		<img className="cart" src={cartIcon} alt="cart icon"  />
	     	</div>
	     	<div className="container">
	     		<hr className="desktop-hr" />
	     	</div>
    </nav>
	)
}


export default Header; 