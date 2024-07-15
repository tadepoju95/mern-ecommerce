import React from 'react';



const ProductCard = ({image, ovalImage, title, link, arrowImage }) => {

	return (
		      	<ul className="navbar-nav">
		      		<img className={"nav-img " + title} src={image} alt="headphones image" />
		      		<img className="oval" src={ovalImage} alt="oval under headphones image" />
		       		<li className="nav-item headphones-item">
		         		<p className="nav-header">{title}</p>
		         		<a href="https://example.com" className="nav-shop">{link}
		         			<img className="shop-arrow" src={arrowImage} alt="opens link" />
		         		</a>
		        	</li>
		      	</ul>
		    

	)
}

export default ProductCard;