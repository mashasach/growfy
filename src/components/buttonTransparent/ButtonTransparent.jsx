import React from 'react';
import './buttonTransparent.scss'
import useAnimatedAppearance from '@/hooks/useAnimatedAppearance.jsx';
import '@/styles/animation.scss';

const ButtonTransparent = ({ buttonText }) => {
   const { ref, isVisible } = useAnimatedAppearance();

   return (
      <div ref={ref} className={`button-transparent  ${isVisible ? "anim-visible--scale" : "anim-hidden--scale"}`}>{buttonText}</div>
   )
}

export default ButtonTransparent