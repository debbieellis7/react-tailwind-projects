import { useState, useEffect, useCallback } from "react";
import { throttle } from "lodash";
import NavigationMenu from "./NavigationMenu";
import formatToAnchor from "../../utils/formatToAnchor";

// Menu items array
const menuItems = ["Home", "About Us", "Popular", "Review"];

// Get the current section based on scroll position
const getCurrentSection = () => {
  for (const item of menuItems) {
    const section = document.getElementById(formatToAnchor(item));
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
        // Return early if current section is found
        return item;
      }
    }
  }

  // Return empty string if no section is active
  return "";
};

const Navbar = () => {
  // State to manage the visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to track scroll position
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll event handler to add/remove border based on scroll position
  const handleScroll = useCallback(
    throttle(() => {
      setIsScrolled(window.scrollY >= 50);

      // Check which section is currently in view
      setActiveSection(getCurrentSection());
    }, 200),
    []
  );

  // Add and cleanup scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Trigger handleScroll on initial load to set the default active section
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      id="navbar"
      className={`bg-green-950 fixed w-full top-0 left-0 z-50 ${
        isScrolled ? "border-b border-yellow-500" : ""
      }`}
    >
      <nav className="container flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <div className="font-Lobster sm:text-2xl">IndoorPlants</div>

        {/* Navigation Menu */}
        <NavigationMenu
          menuItems={menuItems}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          activeSection={activeSection}
        />

        {/* Hamburger Icon */}
        <button
          aria-expanded={isMenuOpen}
          className="text-xl sm:text-3xl cursor-pointer z-50 lg:hidden"
          onClick={toggleMenu}
        >
          <i
            className={isMenuOpen ? "ri-close-large-line" : "ri-menu-4-line"}
          />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
