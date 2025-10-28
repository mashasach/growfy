import React from 'react';
import "./reviews.scss";
import ButtonTransparent from '@/components/buttonTransparent/ButtonTransparent.jsx';
import Title from '@/components/title/Title';
import BaseText from '@/components/baseText/BaseText';
import Button from '@/components/button/Button';
import ReviewsCard from "@/components/reviews/reviewsCard/ReviewsCard.jsx";
import personImg1 from "@/assets/images/reviews/personImg1.svg";
import personImg2 from "@/assets/images/reviews/personImg2.svg";
import personImg3 from "@/assets/images/reviews/personImg3.svg";
import stars from "@/assets/images/reviews/stars.svg";



const Reviews = () => {

  return (
    <div className="reviews">
      <div className="reviews__container">
        <div className="reviews__content">

          <ButtonTransparent
            buttonText="Testimonials" />

          <Title
            animated
            level={2}
            titleText={'See what our clients say'} />

          <BaseText
            baseText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero."} />


          <Button
            buttonModifier={'button--accent'}
            buttonText={'Get in touch'}
            to={'/contacts'}
          />

        </div>
        <div className="reviews__cards">

          <ReviewsCard
            name={'John Doe'}
            images={personImg1}
            imgClass={'reviews-card__image--top-left'}
            company={'Company Name'}
            title={'"I recommend this agency"'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.'}
            stars={stars}
          />


          <ReviewsCard
            name={'Alice Smith'}
            images={personImg2}
            imgClass={'reviews-card__image--top-right'}
            company={'Company Name'}
            title={'"The support is awesome"'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.'}
            stars={stars}
          />

          <ReviewsCard
            name={'Sophia Miller'}
            images={personImg3}
            imgClass={'reviews-card__image--bottom-right'}
            company={'Company Name'}
            title={'“A game changer for us”'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.'}
            stars={stars}
          />

        </div>




      </div>
    </div>
  )
}

export default Reviews