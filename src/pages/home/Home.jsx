import React from 'react';
import Hero from "@/components/hero/Hero.jsx";
import ClientsSlider from '@/components/clients/ClientsSlider.jsx';
import Services from '@/components/services/Services.jsx';
import WhyChooseUs from '@/components/whyChooseUs/WhyChooseUs.jsx';
import Advantages from '@/components/advantages/Advantages.jsx';
import Rewies from '@/components/reviews/Reviews.jsx';
import Posts from '@/components/posts/Posts.jsx';
import ReadyToStart from '@/components/readyToStart/ReadyToStart.jsx'

const Home = () => {
   return (
      <>
         <Hero />
         <ClientsSlider />
         <Services />
         <WhyChooseUs />
         <Advantages />
         <Rewies />
         <Posts />
         <ReadyToStart />
      </>


   )
}

export default Home