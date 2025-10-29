import React from 'react';
import './whyChooseUs.scss';
import whyChooseUs1 from '@/assets/images/whyChooseUs/whyChooseUs1.webp';
import whyChooseUs2 from '@/assets/images/whyChooseUs/whyChooseUs2.webp';
import ButtonTransparent from '@/components/buttonTransparent/buttonTransparent.jsx';
import Title from '@/components/title/Title.jsx';
import Basetext from '@/components/Basetext/Basetext.jsx';
import useAnimatedAppearance from '@/hooks/useAnimatedAppearance.jsx';
import '@/styles/animation.scss';

const WhyChooseUs = () => {
   const { ref: refImg1, isVisible: isVisibleImg1 } = useAnimatedAppearance();
   const { ref: refImg2, isVisible: isVisibleImg2 } = useAnimatedAppearance();
   const { ref: refList, isVisible: isVisibleList } = useAnimatedAppearance();

   return (
      <div className="why-choose-us">
         <div className="why-choose-us__container">
            <div className="why-choose-us__images">

               <div ref={refImg1} className={`why-choose-us__image-wrapper1  ${isVisibleImg1 ? "anim-visible--scale" : "anim-hidden--scale"}`}>
                  <img className="why-choose-us__image1" src={whyChooseUs1} alt="image" />
               </div>


               <div ref={refImg2} className={`why-choose-us__image-wrapper2  ${isVisibleImg2 ? "anim-visible--scale" : "anim-hidden--scale"}`} style={{ "--delay": "0.2s" }} data-delay>
                  <img className="why-choose-us__image2" src={whyChooseUs2} alt="image" />
               </div>

            </div>
            <div className="why-choose-us__content">

               <ButtonTransparent buttonText={'why choose us'} />


               <Title animated titleText={'We help great brands scale with content marketing'} level={2} />


               <Basetext baseText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.'} />

               <ul ref={refList} className={`why-choose-us__list  ${isVisibleList ? "anim-visible" : "anim-hidden"}`} tyle={{ "--delay": "0.2s" }} data-delay>
                  <li className="why-choose-us__list-item">This is some text inside of a div.</li>
                  <li className="why-choose-us__list-item">This is some text inside of a div.</li>
                  <li className="why-choose-us__list-item">This is some text inside of a div.</li>
                  <li className="why-choose-us__list-item">This is some text inside of a div.</li>
               </ul>

            </div>
         </div>
      </div >
   )
}

export default WhyChooseUs