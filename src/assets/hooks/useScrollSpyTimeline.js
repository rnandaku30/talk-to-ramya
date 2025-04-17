import { useEffect, useState } from "react";

const useScrollSpyTimeline = (sectionIds = []) => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollMiddle = window.scrollY + window.innerHeight / 2;

      const offsets = sectionIds.map((id) => {
        const el = document.getElementById(id);
        if (!el) return Number.POSITIVE_INFINITY;
        const rect = el.getBoundingClientRect();
        return Math.abs(rect.top + window.scrollY - scrollMiddle);
      });

      const minOffset = Math.min(...offsets);
      setActiveIndex(offsets.findIndex((offset) => offset === minOffset));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeIndex;
};

export default useScrollSpyTimeline;
