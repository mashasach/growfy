import React from 'react';
import './hero.scss';
import Title from '@/components/title/Title';
import Button from '@/components/button/Button';
import heroImg1 from '@/assets/images/hero/heroImg1.webp';
import heroImg2 from '@/assets/images/hero/heroImg2.webp';
import heroImg3 from '@/assets/images/hero/heroImg3.webp';
import heroImg4 from '@/assets/images/hero/heroImg4.webp';
import BaseText from '@/components/baseText/BaseText';


import useAnimatedAppearance from '@/hooks/useAnimatedAppearance.jsx';
import '@/styles/animation.scss';


const Hero = () => {
   const { ref: ImgRef1, isVisible: isImgVisible1 } = useAnimatedAppearance();
   const { ref: ImgRef2, isVisible: isImgVisible2 } = useAnimatedAppearance();
   const { ref: ImgRef3, isVisible: isImgVisible3 } = useAnimatedAppearance();
   const { ref: ImgRef4, isVisible: isImgVisible4 } = useAnimatedAppearance();
   return (
      <>
         <section className="hero">
            <div className="hero__container">
               <div className="hero__content">
                  <div className="hero__title-wrapper">
                     <Title level={1} animated titleText={'Marketing solutions that grow your business'} />
                  </div>

                  <BaseText
                     baseText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor."} />
                  <div className="hero__buttons">



                     <Button
                        to={'/services'}
                        buttonText={'Our services'}
                        buttonModifier={'button--accent'}

                     />


                     <Button
                        to={'/contacts'}
                        buttonText={'Contacts us'}
                     />

                  </div>
               </div>
               <div className="hero__images">
                  <div className="hero__images-column">

                     <img ref={ImgRef1} className={`hero__image-1 ${isImgVisible1 ? "anim-visible--scale" : "anim-hidden--scale"}`}
                        src={heroImg1} alt="images" />

                     <img ref={ImgRef2} className={`hero__image-2  ${isImgVisible2 ? "anim-visible--scale" : "anim-hidden--scale"}`}
                        src={heroImg3} alt="images" style={{ "--delay": "0.2s" }} data-delay />

                  </div>
                  <div className="hero__images-column">

                     <img ref={ImgRef3} className={`hero__image-3 ${isImgVisible3 ? "anim-visible--scale" : "anim-hidden--scale"}`}
                        src={heroImg2} alt="images" style={{ "--delay": "0.4s" }} data-delay />

                     <img ref={ImgRef4} className={`hero__image-4 ${isImgVisible4 ? "anim-visible--scale" : "anim-hidden--scale "}`}
                        src={heroImg4} alt="images" style={{ "--delay": "0.6s" }} data-delay />

                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Hero;