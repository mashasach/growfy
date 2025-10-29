import React from 'react';
import { Link } from 'react-router-dom';
import './backArrow.scss'

const BackArrow = () => {
   const BASE_URL = import.meta.env.BASE_URL;
   const SPRITE_URL = `${BASE_URL}sprite.svg?v-2#`;

   return (

      <Link className="back-arrow" to='/' >
         <svg className="icon icon-arrow-left" width="24" height="24" fill="currentColor">
            <use href={`${SPRITE_URL}icon-arrow-left`} />
         </svg>
         to Home
      </Link>

   )
}

export default BackArrow