import React from 'react';
import "./postCard.scss";
import { Link } from 'react-router-dom';
import useAnimatedAppearance from '@/hooks/useAnimatedAppearance.jsx';
import '@/styles/animation.scss';

const PostCard = ({ post, modifier }) => {
   const { ref, isVisible } = useAnimatedAppearance();
   return (
      <article ref={ref} className={`post-card ${modifier} ${isVisible ? "anim-visible--scale" : "anim-hidden--scale "}`}>
         <Link className="post-card__link" to={`/posts/${post.id}`} >
            <div className="post-card__image-wrapper">
               <img src={post.image} className="post-card__image" alt={post.title} />
            </div>
            <div className="post-card__info">
               <p className="post-card__info-date">{post.date}</p>

               <h3 className="post-card__info-title">{post.title}</h3>

               <p className="post-card__info-text">{post.excerpt}</p>
               <p className="post-card__info-link" to={`/posts/${post.id}`} >Read now</p>
            </div>
         </Link>
      </article>
   )
}

export default PostCard