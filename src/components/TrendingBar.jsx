import { useRef, useEffect } from "react";
import TrendingCard from "./TrendingCard"
import data from '../../data.json';

export default function TrendingBar() {
  const containerRef = useRef(null);

  const trending = data.filter(item => item.isTrending);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      // Allow vertical scroll when holding Shift
      if (e.shiftKey) return;

      // Prevent default vertical scroll
      e.preventDefault();

      // Scroll sideways instead
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => el.removeEventListener("wheel", onWheel);
  }, []);
    
    return <section 
            className='grid grid-flow-col overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4' 
            ref={containerRef}
            >
       {trending.map(item => (
          <TrendingCard
            key={item.title}
            thumbnail={item.thumbnail.trending.small} 
            year={item.year}
            category={item.category}
            title={item.title}
            rating={item.rating}
          />
       ))}
    </section>
}