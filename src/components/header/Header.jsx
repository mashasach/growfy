import React from 'react';
import { useEffect } from 'react';
import './header.scss';
import { NavLink } from "react-router-dom";
import logo from '@/assets/logo/logo.svg';
import Button from '@/components/button/Button.jsx'
import Burger from '@/components/burger/Burger.jsx'
import { useState } from 'react';
import classNames from 'classnames';

const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
      setMenuOpen(prev => !prev);
   };

   useEffect(() => {
      if (menuOpen) {
         document.body.classList.add('no-scroll');
      } else {
         document.body.classList.remove('no-scroll');
      }
   }, [menuOpen]);


   return (
      <div className="header">
         <div className="header__container">
            <div className="header__logo-wrapper">
               <NavLink to='/' >
                  <img className="header__logo" src={logo} alt="GrowfyLogo" />
               </NavLink>
            </div>

            <nav className="header__menu menu">

               <div className={classNames('menu__body', { 'menu__body--open': menuOpen })}>

                  <ul className="menu__list">
                     <li className="menu__item">
                        <NavLink
                           className={({ isActive }) => `${isActive ? "menu__item--active" : ""}`}
                           onClick={() => setMenuOpen(false)} to='/' end >Home </NavLink>
                     </li>
                     <li className="menu__item">
                        <NavLink
                           className={({ isActive }) => `${isActive ? "menu__item--active" : ""}`}
                           onClick={() => setMenuOpen(false)} to='/services'>Services</NavLink>
                     </li>
                     <li className="menu__item">
                        <NavLink
                           className={({ isActive }) => `${isActive ? "menu__item--active" : ""}`}
                           onClick={() => setMenuOpen(false)} to='/contacts'>Contacts</NavLink>
                     </li>
                     <li className="menu__item">
                        <NavLink
                           className={({ isActive }) => `${isActive ? "menu__item--active" : ""}`}

                           onClick={() => setMenuOpen(false)} to='/posts'>Blog</NavLink>
                     </li>
                  </ul>
               </div>


            </nav>

            <Button to={'/contacts'} buttonText={'Get started'} buttonModifier={'button--accent'} animated={false} />
            <div className="header__burger-wrapper">
               <Burger menuOpen={menuOpen} onClick={toggleMenu} />
            </div>



         </div>
      </div>
   )
}

export default Header