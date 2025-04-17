import { useEffect, useState } from "react";

const useScrollSpyNav = (sectionIds = [], offset = 0, containerId = null) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const rootEl = containerId ? document.getElementById(containerId) : null;
      if (!rootEl) return;

      const observer = new IntersectionObserver(
        (entries) => {
          let visibleSections = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          if (visibleSections.length > 0) {
            setActiveId(visibleSections[0].target.id);
          }
        },
        {
          root: rootEl,
          rootMargin: `-100px 0px -50% 0px`,
          threshold: 0.1,
        }
      );

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
        }
      });

      return () => observer.disconnect();
    }, 500); // Delay helps ensure all DOM nodes are ready

    return () => clearTimeout(timeout);
  }, [sectionIds, offset, containerId]);

  return activeId;
};

export default useScrollSpyNav;
