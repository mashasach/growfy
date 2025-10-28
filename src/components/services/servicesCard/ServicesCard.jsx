import React from 'react';
import './servicesCard.scss'

import useAnimatedAppearance from '@/hooks/useAnimatedAppearance.jsx';
import '@/styles/animation.scss';

const ServicesCard = ({ src, title, text }) => {
   const { ref, isVisible } = useAnimatedAppearance();


   return (
      <article ref={ref} className={`services__card  ${isVisible ? "anim-visible--scale" : "anim-hidden--scale"}`}>
         <img src={src} className="services__card-svg" />
         <h3 className="services__card-title">{title}</h3>
         <div className="services__card-text">{text}</div>
      </article>

   )
}

export default ServicesCard