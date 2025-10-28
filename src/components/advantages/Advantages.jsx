import "./advantages.scss";
import AdvantagesCard from "@/components/advantages/advantagesCard/AdvantagesCard.jsx";
import advantageImage from "@/assets/images/advantage/advantageImage.svg";
import useAnimatedAppearance from '@/hooks/useAnimatedAppearance.jsx';
import '@/styles/animation.scss';

const Advantages = () => {
   const { ref: imageRef, isVisible: isImageVisible } = useAnimatedAppearance();

   return (
      <div className="advantages">
         <div className="advantages__container">

            <div className="advantages__cards" >

               <AdvantagesCard value={'1.2'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.'} />


               <AdvantagesCard value={'3.4B'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.'} />


               <AdvantagesCard value={'98%'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.'} />


               <AdvantagesCard value={'10+'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.'} />

            </div>

            <div ref={imageRef} className={`advantages__images  ${isImageVisible ? "anim-visible--scale" : "anim-hidden--scale"}`}>
               <img className="advantages__image" src={advantageImage} alt="image"></img>
            </div>

         </div>
      </div>
   )
}

export default Advantages