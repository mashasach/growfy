import React from 'react';
import './button.scss';
import { Link } from "react-router-dom";
import useAnimatedAppearance from '@/hooks/useAnimatedAppearance.jsx';
import '@/styles/animation.scss';

const AccentButton = ({ buttonText, buttonModifier, to, animated = true }) => {
   const { ref, isVisible } = useAnimatedAppearance();
   const animatedClass = ` ${isVisible ? "anim-visible" : "anim-hidden"}`;
   return (
      <Link to={to} ref={ref} className={`button ${buttonModifier} ${animated ? animatedClass : ''}  `} style={{ "--delay": "0.2s" }} data-delay>{buttonText}</Link>
   )
}

export default AccentButton
