import { useState, useEffect, useCallback } from "react";
import { throttle } from "lodash";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Throttled scroll event handler
  const toggleVisibility = useCallback(
    throttle(() => {
      setIsVisible(window.scrollY >= 250);
    }, 200),
    []
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup the scroll event listener and throttle on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      // Cancel throttle on unmount to prevent memory leaks
      toggleVisibility.cancel();
    };
  }, [toggleVisibility]);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-4 bottom-4 bg-yellow-500 shadow-sm px-3 py-1 md:px-4 md:py-2 rounded-md text-lg z-50 
        hover:-translate-y-1 duration-300 transition-all"
      aria-label="Scroll to top"
    >
      <i className="ri-arrow-up-line" />
    </button>
  );
};

export default ScrollToTopButton;
