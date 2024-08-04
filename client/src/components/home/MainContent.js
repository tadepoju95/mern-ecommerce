import React from 'react';
import headphonesImg from '../../assets/home/mobile/image-header.jpg'


const MainContent = () => {

	return (
		<main>
			<div className="main-content">
			<img className="headphonesImg" src={headphonesImg} alt="headphones image" />
			<div className="main-text">
				<p className="info">NEW PRODUCT</p>
				<h1 className="hi">XX99 MARK II HEADPHONES</h1>
				<p className="bye">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
				<button type="button">SEE PRODUCT</button> 
			</div>
			</div>
		</main>
	)
}

export default MainContent;