import React from 'react';
import './title.scss';
import AnimatedTitle from "@/components/animatedTitle/AnimatedTitle"

const Title = ({ titleText, level, animated = false }) => {
   const Tag = `h${level}`


   if (animated) {
      return <AnimatedTitle text={titleText} as={Tag} />;
   }
   return <Tag className='title'>{titleText}</Tag>



}

export default Title