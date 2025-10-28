import React from 'react';
import "./reviewsCard.scss";
import useAnimatedAppearance from '@/hooks/useAnimatedAppearance.jsx';
import '@/styles/animation.scss';


const reviewsCard = ({ imgClass, images, name, company, title, text, stars }) => {
   const { ref, isVisible } = useAnimatedAppearance();
   return (
      <article ref={ref} className={`reviews-card  ${isVisible ? "anim-visible--scale" : "anim-hidden--scale"}`}>
         <div className="reviews-card__person">
            <div className="reviews-card__image-wrapper">
               <img className={`reviews-card__image ${imgClass}`} src={images} alt="images" />
            </div>
            <div className="reviews-card__info">
               <p className="reviews-card__name">{name}</p>
               <p className="reviews-card__company">{company}</p>
            </div>
         </div>
         <h3 className="reviews-card__title">{title}</h3>
         <p className="reviews-card__text">{text}</p>
         <div className="reviews-card__stars">
            <img src={stars} alt="stars" />
         </div>
      </article>

   )
}

export default reviewsCard