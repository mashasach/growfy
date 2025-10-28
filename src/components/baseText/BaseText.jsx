import React from 'react';
import "./baseText.scss";
import useAnimatedAppearance from '@/hooks/useAnimatedAppearance.jsx';
import '@/styles/animation.scss';


const BaseText = ({ baseText }) => {
   const { ref, isVisible } = useAnimatedAppearance();
   return (
      <p ref={ref} className={`text__base  ${isVisible ? "anim-visible" : "anim-hidden"}`}>
         {baseText}
      </p>
   )
}

export default BaseText