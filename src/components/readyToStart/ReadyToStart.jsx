import React from 'react';
import Title from '@/components/title/Title';
import BaseText from '@/components/baseText/BaseText';
import Button from '@/components/button/Button';
import './readyToStart.scss';
import useAnimatedAppearance from '@/hooks/useAnimatedAppearance.jsx';
import '@/styles/animation.scss';

const ReadyToStart = () => {
   const { ref: text, isVisible: isTextVisible } = useAnimatedAppearance();
   const { ref: backRef, isVisible: isBackVisible } = useAnimatedAppearance();
   return (
      <section className="ready-to-start">
         <div
            ref={backRef} className={`ready-to-start__container  ${isBackVisible ? "anim-visible--scale" : "anim-hidden--scale"}`}
         >
            <div className="ready-to-start__content">
               <Title
                  animated
                  level={2}
                  titleText={'Ready to start scaling your business now?'} />

               <p ref={text} className={`ready-to-start__text  ${isTextVisible ? "anim-visible" : "anim-hidden"}`} style={{ "--delay": "0.2s" }}>
                  Lorem ipsum dolor sit am consectetur adipiscing varius enim in eros
               </p>



            </div>

            <div className="ready-to-start__buttons">

               <Button
                  buttonModifier={'button--accent'}
                  buttonText={'Our services'}
                  to={'/services'}
               />


               <Button
                  buttonText={'Contact us'}
                  to={'/contacts'}
               />

            </div>
         </div>
      </section>
   )
}

export default ReadyToStart