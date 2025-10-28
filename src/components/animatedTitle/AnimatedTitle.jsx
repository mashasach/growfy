import React, { useEffect, useRef, useState } from "react";
import "./animatedTitle.scss";

const AnimatedTitle = ({ text, as = "h2", threshold = 0.3 }) => {
   const ref = useRef(null);
   const [isVisible, setIsVisible] = useState(false);
   const Tag = as;


   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  setIsVisible(true);
                  observer.unobserve(entry.target);
               }
            });
         },
         { threshold: threshold }
      );

      if (ref.current) observer.observe(ref.current);

      return () => observer.disconnect();
   }, [threshold]);


   const words = text.split(" ");
   let globalIndex = 0;

   return (

      <Tag ref={ref} className={`title animated-title ${isVisible ? "visible" : ""}`}>
         {words.map((word, wi) => {
            const chars = word.split("");

            return (
               // КОНТЕЙНЕР СЛОВА
               <span key={wi} className="word">
                  {chars.map((char, ci) => {
                     const delay = globalIndex * 0.04;
                     globalIndex += 1;

                     return (
                        // ЛІТЕРА
                        <span
                           key={ci}
                           className="char"
                           style={{ transitionDelay: `${delay}s` }}
                        >
                           {char}
                        </span>
                     );
                  })}

                  {/* ПРОБІЛ */}
                  {wi < words.length - 1 && (
                     <span key={`space-${wi}`} className="space">
                        {"\u00A0"}
                     </span>
                  )}
               </span>
            );
         })}
      </Tag>
   );
};

export default AnimatedTitle;