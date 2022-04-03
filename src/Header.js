import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";
import SearchIcon from "@material-ui/icons/Search"  
import { ShoppingBasket } from '@material-ui/icons';
import { useStateValue } from './StateProvider.js';

function Header() {
  const [{ basket }] = useStateValue();

  console.log(basket);

  return(
    <div>
        <nav className='header'>
          <Link to="/">
            <img 
                className='header__logo' 
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
                alt='' 
            />
          </Link>
            
            {/* Search Box */}
            <div className="header__search" >
              <input type="text" className='header__searchInput'>
              </input>
              <SearchIcon className="header__searchIcon" />
            </div>
            
            <div className="header__nav">

              {/* 1st Link */}
              <Link to="/login" className="header__link">
                <div className="header__option">
                  <span className='header__optionLineOne'>Hello AG</span>
                  <span className='header__optionLineTwo'>Sign In</span>
                </div>
              </Link>

              {/* 2nd Link */}
              <Link to="/" className="header__link">
                <div className="header__option">
                  <span className='header__optionLineOne'>Returns</span>
                  <span className='header__optionLineTwo'>& Orders</span>
                </div>
              </Link>

              {/* 3rd Link */}
              <Link to="/" className="header__link">
                <div className="header__option">
                  <span className='header__optionLineOne'>Your</span>
                  <span className='header__optionLineTwo'>Prime</span>
                </div>
              </Link>

              {/* 4th Link */}
              <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                  {/* Shopping basket icon */}
                  <ShoppingBasket/>
                  {/* Number of items in the basket */}
                  <span className='header__optionLineTwo header__basketCount'>{basket.length}</span>
                </div>
              </Link>
              
            </div>
        </nav>
    </div>
  );
}

export default Header;
