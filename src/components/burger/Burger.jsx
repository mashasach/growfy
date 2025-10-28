import React from 'react';
import './burger.scss';
import classNames from "classnames";

const Burger = ({ menuOpen, onClick }) => {
   return (
      <>


         <button
            className={classNames('burger', { 'burger--open': menuOpen })}
            onClick={onClick}>
            <span></span>
         </button>

      </>

   )
}

export default Burger