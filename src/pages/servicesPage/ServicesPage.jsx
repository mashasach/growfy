import React from 'react';
import "./servicesPage.scss";
import Title from "@/components/title/Title.jsx";
import ServicesCard from "@/components/services/servicesCard/ServicesCard";
import servicesSvg1 from '@/assets/images/services/servicesSvg1.svg';
import servicesSvg2 from '@/assets/images/services/servicesSvg2.svg';
import servicesSvg3 from '@/assets/images/services/servicesSvg3.svg';
import servicesSvg4 from '@/assets/images/services/servicesSvg4.svg';
import useAnimatedAppearance from '@/hooks/useAnimatedAppearance.jsx';
import '@/styles/animation.scss';

const ServicesPage = () => {
   const { ref: textRef, isVisible: isTextVisible } = useAnimatedAppearance();
   return (
      <section className="services-page">
         <div className="services-page__container">
            <div className="services-page__page-title">
               <Title titleText={"Our Services"} level={1} animated />
            </div>

            <div className="services-page__experience">
               <Title titleText={"We have over 25 years of experience"} level={2} animated />
               <p ref={textRef} className={`services-page__experience-text  ${isTextVisible ? "anim-visible" : "anim-hidden"}`}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quisquam sit delectus, ducimus libero assumenda magnam deserunt iusto inventore neque aliquam aliquid voluptatem fuga nulla incidunt consectetur enim similique quaerat!
               </p>
            </div>


            <div className="services-page__what-we-do">
               <Title titleText={"What we do for you"} level={3} animated />
            </div>

            <div className="services-page__items">

               <ServicesCard src={servicesSvg1} title={'Social Media Marketing'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.'} />


               <ServicesCard src={servicesSvg2} title={'Email Marketing'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.'} />


               <ServicesCard src={servicesSvg3} title={'Paid Advertising'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.'} />


               <ServicesCard src={servicesSvg4} title={'SEO Optimization'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.'} />

            </div>

         </div>
      </section >

   )
}

export default ServicesPage