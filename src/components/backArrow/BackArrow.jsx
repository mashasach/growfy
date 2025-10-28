import React from 'react';
import { Link } from 'react-router-dom';
import './backArrow.scss'

const BackArrow = () => {
   return (

      <Link className="back-arrow" to='/' >
         <svg className="icon icon-arrow-left" width="24" height="24" fill="currentColor">
            <use href="/sprite.svg?v-1#icon-arrow-left" />
         </svg>
         to Home
      </Link>

   )
}

export default BackArrow