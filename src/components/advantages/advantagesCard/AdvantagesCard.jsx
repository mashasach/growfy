import React from 'react';
import "./advantagesCard.scss"
import useAnimatedAppearance from '@/hooks/useAnimatedAppearance.jsx';
import Counter from "@/components/Counter";
import '@/styles/animation.scss';

const AdvantagesCard = ({ value, text }) => {
   const { ref, isVisible } = useAnimatedAppearance();
   return (
      <div ref={ref} className={`advantages__card  ${isVisible ? "anim-visible--scale" : "anim-hidden--scale"}`}>
         <div className="advantages__value">
            <Counter value={value} />
         </div>
         <p className="advantages__text">{text}</p>
      </div>
   )
}

export default AdvantagesCard