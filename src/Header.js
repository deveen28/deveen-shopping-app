import React from 'react'
import './Header.css'
import logo from './logo.png';
import {FaSearch} from "react-icons/fa";

export const Header = () => {
  return (
    <div className='header'>
      <img className = "header__logo" src={logo}/>
      
      <div className='header__search'>
        <input className='header___searchInput' type="text" />
        <FaSearch className='searchIcons' />
        
      </div>

      <div className='header__nav'>
        
        <div className='header__option'>
           <span className='header__optionlineone'>Hello,</span>
           <span className='header__optionlinetwo'>Sign In</span>
        </div>

        <div className='header__option'>
           <span className='header__optionlineone'>returns</span>
           <span className='header__optionlinetwo'>& Orders</span>
        </div>

        <div className='header__option'>
           <span className='header__optionlineone'>your</span>
           <span className='header__optionlinetwo'>prime</span>
        </div>

      </div>
    
    </div>
  )
}
export default Header;