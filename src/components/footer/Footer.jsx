import React from 'react'; // useState вже не потрібен
import './footer.scss';
import logo from '@/assets/logo/logo.svg';
import { Link } from 'react-router-dom';
import SubscribeForm from '@/components/subscribeForm/SubscribeForm';
import useAnimatedAppearance from '@/hooks/useAnimatedAppearance.jsx';
import '@/styles/animation.scss';


const Footer = () => {
   const BASE_URL = import.meta.env.BASE_URL;
   const SPRITE_URL = `${BASE_URL}sprite.svg?v-2#`;

   const { ref: ref1, isVisible: isVisible1 } = useAnimatedAppearance();
   const { ref: ref2, isVisible: isVisible2 } = useAnimatedAppearance();
   const { ref: ref3, isVisible: isVisible3 } = useAnimatedAppearance();

   return (
      <div className='footer'>
         <div className="footer__container">


            <div ref={ref1} className={`footer__column  ${isVisible1 ? "anim-visible" : "anim-hidden"}`} >
               <Link className="footer__link" to='/'>
                  <img className="footer__logo" src={logo} alt="GrowfyLogo" />
               </Link>
               <p className="footer__text">
                  Growfy is a template highly suitable for modern marketing agencies, digital studios, startups and businesses.
                  The design is made in the dark style, which makes the site memorable and you can easily adapt it to your brand.
               </p>
               <div className="footer__icons">
                  <Link className="footer__link" to='/' aria-label="Перейти до нашого linkedin">
                     <svg className="footer__icon icon-linkedin" width="36" height="36" fill="currentColor">
                        <use href={`${SPRITE_URL}icon-linkedin`} />
                     </svg>
                  </Link>
                  <Link className="footer__link" to='/' aria-label="Перейти до нашого twitter">
                     <svg className="footer__icon  icon-twitter" width="36" height="36" fill="currentColor">

                        <use href={`${SPRITE_URL}icon-twitter`} />
                     </svg>
                  </Link>
                  <Link className="footer__link" to='/' aria-label="Перейти до нашого facebook">
                     <svg className="footer__icon icon-facebook" width="36" height="36" fill="currentColor">

                        <use href={`${SPRITE_URL}icon-facebook`} />
                     </svg>
                  </Link>
                  <Link className="footer__link" to='/' aria-label="Перейти до нашого youtube">
                     <svg className="footer__icon icon-youtube" width="36" height="36" fill="currentColor">

                        <use href={`${SPRITE_URL}icon-youtube`} />
                     </svg>
                  </Link>
                  <Link className="footer__link" to='/' aria-label="Перейти до нашого instagram">
                     <svg className="footer__icon icon-instagram" width="36" height="36" fill="currentColor">

                        <use href={`${SPRITE_URL}icon-instagram`} />
                     </svg>
                  </Link>
               </div>
            </div>


            <div ref={ref2} className={`footer__column  ${isVisible2 ? "anim-visible" : "anim-hidden"}`} style={{ "--delay": "0.1s" }} data-delay>
               <div className="footer__label">Pages</div>
               <nav className="footer__nav">
                  <ul className="footer__nav-list">
                     <li className="footer__item">
                        <Link className="footer__nav-link" to='/'>Home</Link>
                     </li>
                     <li className="footer__item">
                        <Link className="footer__nav-link" to='/services'>Services</Link>
                     </li>
                     <li className="footer__item">
                        <Link className="footer__nav-link" to='/contacts'>Contacts</Link>
                     </li>
                     <li className="footer__item">
                        <Link className="footer__nav-link" to='/posts'>Blog</Link>
                     </li>
                  </ul>
               </nav>
            </div>


            <div ref={ref3} className={`footer__column ${isVisible3 ? "anim-visible" : " anim-hidden"}`} style={{ "--delay": "0.3s" }} data-delay >
               <div className="footer__label">Subscribe to our newsletter</div>
               <p className="footer__text">Lorem ipsum dolor sit am consectetur adipiscing</p>
               <SubscribeForm />
            </div>

         </div>
      </div>
   )
}

export default Footer;