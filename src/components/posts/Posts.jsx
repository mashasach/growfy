import React from 'react';
import PostCard from './postCard/PostCard';
import postsData from '@/data/postsData';
import ButtonTransparent from '@/components/buttonTransparent/ButtonTransparent.jsx';
import Title from '@/components/title/Title';
import BaseText from '@/components/baseText/BaseText';
import Button from '@/components/button/Button';
import "./posts.scss";
import useAnimatedAppearance from '@/hooks/useAnimatedAppearance.jsx';
import '@/styles/animation.scss';

const Posts = () => {
  
   const previewPosts = postsData.slice(0, 3);
   return (
      <section className="posts">
         <div className="posts__container">
            <div className="posts__content">

               <ButtonTransparent
                  buttonText="Blog" />

               <Title
                  animated
                  level={2}
                  titleText={'Read ourarticles & news'} />

               <BaseText
                  baseText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero."} />

               <Button
                  buttonModifier={'button--accent'}
                  buttonText={'All Posts'}
                  to={'/posts'}
               />

            </div>

            <div className='posts__cards'>
               {
                  previewPosts.map((post, index) => (

                     <PostCard modifier={'post-card--interactive'} key={post.id} post={post} />

                  ))
               }
            </div>



         </div>
      </section>
   )
}

export default Posts