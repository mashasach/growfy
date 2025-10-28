import React from 'react';
import './clientsSlider.scss';
import SliderSwiper from './sliderSwiper/SliderSwiper.jsx';

import Luminous from '@/assets/images/clientSlider/Luminous.svg';
import Sitemark from '@/assets/images/clientSlider/Sitemark.svg';
import Pronature from '@/assets/images/clientSlider/Pronature.svg';
import Greenish from '@/assets/images/clientSlider/Greenish.svg';
import Waveless from '@/assets/images/clientSlider/Waveless.svg';
import useAnimatedAppearance from '@/hooks/useAnimatedAppearance.jsx';
import '@/styles/animation.scss';


const ClientsSlider = () => {
   const { ref: sliderRef, isVisible: isSliderVisible } = useAnimatedAppearance();
   const { ref: titleRef, isVisible: isTitleVisible } = useAnimatedAppearance();
   const clients = [Luminous, Sitemark, Pronature, Greenish, Waveless, Luminous]
   return (
      <section className="clients">
         <div className="clients__container">

            <div ref={titleRef} className={`clients__title  ${isTitleVisible ? "anim-visible--scale" : "anim-hidden--scale"}`}>TRUSTED BY startups and large enterprises</div>

            <div ref={sliderRef} className={`clients__items-wrapper ${isSliderVisible ? "anim-visible--scale" : " anim-hidden--scale"}`} style={{ "--delay": "0.2s" }} data-delay >
               <SliderSwiper items={clients} />
            </div>

         </div>
      </section>
   )
}

export default ClientsSlider