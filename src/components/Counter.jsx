import { useEffect, useState } from "react";
import useAnimatedAppearance from "@/hooks/useAnimatedAppearance";
import '@/styles/animation.scss';

const Counter = ({ value }) => {
   const { ref, isVisible } = useAnimatedAppearance();

   const [count, setCount] = useState(0);

   const match = String(value).match(/^([\d.]+)(.*)$/);
   const end = parseFloat(match[1]);
   const suffix = match[2] || "";

   useEffect(() => {
      if (!isVisible) return;
      let start = 0;
      const duration = 1500;
      const stepTime = 60;
      const totalSteps = duration / stepTime;
      const increment = end / totalSteps;

      const timer = setInterval(() => {
         start += increment;
         if (start >= end) {
            start = end;
            clearInterval(timer);
         }
         setCount(Number(start.toFixed(1)));
      }, stepTime);

      return () => clearInterval(timer);
   }, [isVisible, end]);

   return (
      <div ref={ref} style={{ fontSize: 48, fontWeight: "bold" }}>
         {count}
         {isVisible && suffix}
      </div>
   );
};

export default Counter;