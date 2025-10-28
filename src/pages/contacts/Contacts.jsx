import React from 'react';
import './contacts.scss';
import ContactForm from '@/components/contactForm/ContactForm';
import Title from '@/components/title/Title';
import BaseText from '@/components/baseText/BaseText';
import useAnimatedAppearance from '@/hooks/useAnimatedAppearance.jsx';
import '@/styles/animation.scss';

const Contacts = () => {
  const { ref: refInfo1, isVisible: isInfoVisible1 } = useAnimatedAppearance();
  const { ref: refInfo2, isVisible: isInfoVisible2 } = useAnimatedAppearance();
  const { ref: refInfo3, isVisible: isInfoVisible3 } = useAnimatedAppearance();

  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__info">
          <Title titleText={'Contact us'} level={1} animated />

          <BaseText baseText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.'} />

          <div className="contact__details">

            <a href="tel:0650694504" ref={refInfo1} className={`contact__details-item  ${isInfoVisible1 ? "anim-visible" : "anim-hidden"}`}
              style={{ "--delay": "0.2s" }} data-delay >
              <svg className="contact__details-icon" width="24" height="24" fill="currentColor">
                <use href="/sprite.svg?v-2#icon-phone" />
              </svg>
              <span className="contact__details-value">+380 55 555 55 55</span>
            </a>


            <a href="mailto:example@gmail.com" ref={refInfo2} className={`contact__details-item  ${isInfoVisible2 ? "anim-visible" : "anim-hidden"}`}
              style={{ "--delay": "0.2s" }} data-delay >
              <svg className="contact__details-icon" width="24" height="24" fill="currentColor">
                <use href="/sprite.svg?v-2#icon-mail" />
              </svg>
              <span className="contact__details-value">example@gmail.com</span>
            </a>

          </div>
        </div>

        <div ref={refInfo3} className={`contact__form-wrapper  ${isInfoVisible3 ? "anim-visible--scale" : "anim-hidden--scale"}`}>
          <p className="contact__form-title">Get in touch</p>
          <ContactForm />
        </div>

      </div>
    </section>
  )
}

export default Contacts 