import { useParams, Link } from "react-router-dom";
import postsData from "@/data/postsData.json";
import './postPage.scss';

import BackArrow from "@/components/backArrow/BackArrow.jsx";
import useAnimatedAppearance from '@/hooks/useAnimatedAppearance.jsx';
import '@/styles/animation.scss';

export default function PostPage() {
   const { ref, isVisible } = useAnimatedAppearance();
   const { id } = useParams();
   const post = postsData.find(p => p.id === Number(id));

   if (!post) {
      return (
         <div >
            <h2>Пост не знайдено</h2>
            <Link to="/">← to Home</Link>
         </div>
      );
   }
   return (
      <>
         <main className="post-page">
            <div className="post-page__container">
               <div className="post-page__arrow">
                  <BackArrow />
               </div>

               <article ref={ref} className={`post-card single-card  ${isVisible ? "anim-visible--scale" : "anim-hidden--scale"}`} >
                  <div className="post-card__image-wrapper single-card__wrapper">
                     <img src={post.image} className="post-card__image" alt={post.title} />
                  </div>
                  <div className="post-card__info post-card__info--single">
                     <p className="post-card__info-date">{post.date}</p>
                     <h3 className="post-card__info-title">{post.title}</h3>
                     <div className="post-card__info-text post-card__info-text--single" >
                        {post.content.map((paragraph, index) => (
                           <p key={index}  >
                              {paragraph}
                           </p>
                        ))}
                     </div>
                     <Link className="post-card__info-link" to='/posts' >
                        <svg className="icon icon-arrow-left" width="24" height="24" fill="currentColor">
                           <use href="/sprite.svg?v-1#icon-arrow-left" />
                        </svg>
                        to all post</Link>
                  </div>
               </article>
            </div>
         </main>

      </>




   );
}