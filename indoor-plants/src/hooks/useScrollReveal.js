import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

// Custom hook to initialize ScrollReveal with default and custom options
const useScrollReveal = (revealConfigs, deps = []) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 300,
      reset: true,
    });

    // Loop through each configuration to apply custom ScrollReveal options
    revealConfigs.forEach(({ selector, options }) => {
      sr.reveal(selector, options);
    });

    // Specify dependencies to reapply ScrollReveal if needed
  }, deps);
};

export default useScrollReveal;
