import React from 'react';
import "./home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <img 
        className='home__image'
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg "
        alt=""
        />

        {/* Product id, title, price, rating, image */}
        <div className='home__row'>
          <Product 
          id="12321341"
          title="PS5 Cooling Stand Charging Station-7 in 1 Full Protection kit"
          price={56}
          rating={5}
          image="https://m.media-amazon.com/images/I/71KsOHhK9HL._AC_SX679_.jpg"/>

          <Product 
          id="12321342"
          title="Nike Men’s Air Force 1 Low Sneaker"
          price={159.64}
          rating={4}
          image="https://m.media-amazon.com/images/I/71zKmTHcHUL._AC_UX695_.jpg"/>
        </div>
        
        <div className='home__row'>
          <Product 
          id="12321343"
          title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display"
          price={226.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL.__AC_SY300_SX300_QL70_FMwebp_.jpg"/>

        <Product 
          id="12321344"
          title="RESPAWN RSP-110 Racing Style Gaming, Reclining Ergonomic Chair with Footrest, Green"
          price={159.00}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71sPNcGKGVS.__AC_SX300_SY300_QL70_FMwebp_.jpg"/>

          <Product 
          id="12321345"
          title="Apple MacBook Pro (13-inch, 16GB RAM, 512GB SSD Storage, Magic Keyboard) - Space Gray (Renewed)
          "
          price={1199.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71HAM56AEGL.__AC_SX300_SY300_QL70_FMwebp_.jpg"/>
        </div>

        <div className='home__row'>
          <Product 
          id="12321341"
          title="SAMSUNG 65-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in"
          price={2699}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71LJJrKbezL.__AC_SY300_SX300_QL70_FMwebp_.jpg"/>
        </div>

        {/* PRoduct */}
    </div>
  );
}

export default Home;