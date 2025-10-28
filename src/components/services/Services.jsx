import React from 'react';
import './services.scss';
import Title from '@/components/title/Title';
import BaseText from '@/components/baseText/BaseText';
import Button from '@/components/button/Button';
import ButtonTransparent from '@/components/buttonTransparent/ButtonTransparent';
import ServicesCard from '@/components/services/servicesCard/ServicesCard';
import servicesSvg1 from '@/assets/images/services/servicesSvg1.svg';
import servicesSvg2 from '@/assets/images/services/servicesSvg2.svg';
import servicesSvg3 from '@/assets/images/services/servicesSvg3.svg';
import servicesSvg4 from '@/assets/images/services/servicesSvg4.svg';



const Services = () => {

   return (
      <div className="services">
         <div className="services__container">
            <div className="services__info">

               <ButtonTransparent buttonText={'services'} />

               <Title titleText={'Services we offer'} level={2} animated />

               <BaseText baseText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.'} />

               <Button buttonText={'All services'} to={'/services'} buttonModifier={'button--accent'} />


            </div>
            <div className="services__cards">
               <div className="services__cards-column">

                  <ServicesCard src={servicesSvg1} title={'Social Media Marketing'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.'} />


                  <ServicesCard src={servicesSvg2} title={'Email Marketing'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.'} />

               </div>
               <div className="services__cards-column">

                  <ServicesCard src={servicesSvg3} title={'Paid Advertising'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.'} />

                  <ServicesCard src={servicesSvg4} title={'SEO Optimization'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.'} />

               </div>

            </div>
         </div>
      </div>
   )
}

export default Services