import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';
import Button from '../button/Button';
import MenuList from '../menuList/MenuList';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <ul className='gpt3__navbar-links-container'>
          <MenuList />
        </ul>
      </div>
      <div className='gpt3__navbar-sign'>
        <span>Sign in</span>
        <Button title='Sign up' />
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine color='#fff' size='2.5rem' onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color='#fff' size='2.5rem' onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <ul className='gpt3__navbar-menu_container-links'>
              <MenuList />
            </ul>
            <div className='gpt3__navbar-menu_container-links-sign'>
              <span>Sign in</span>
              <Button title='Sign up' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
