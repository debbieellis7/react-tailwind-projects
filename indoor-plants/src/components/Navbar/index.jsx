import { useState } from "react";

const Navbar = () => {
  // State to manage the visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Menu items array
  const menuItems = ["Home", "About", "Popular", "Review"];

  return (
    <header className="bg-green-950 fixed w-full top-0 left-0 z-50">
      <nav className="container flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <div className="font-Lobster sm:text-2xl">IndoorPlants</div>

        {/* Navigation Menu */}
        <div
          className={`absolute top-0 ${
            isMenuOpen ? "left-0" : "left-[-100%]"
          } min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}
        >
          <ul className="flex flex-col items-center gap-8 lg:flex-row">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="nav-link"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Decorative images */}
          <img
            src="../src/assets/leaf-1.png"
            alt="Leaf decoration 1"
            className="absolute bottom-0 -right-10 w-32 opacity-90 lg:hidden"
          />
          <img
            src="../src/assets/leaf-2.png"
            alt="Leaf decoration 2"
            className="absolute -top-5 -left-5 rotate-90 w-32 opacity-90 lg:hidden"
          />
        </div>

        {/* Hamburger Icon */}
        <div
          className="text-xl sm:text-3xl cursor-pointer z-50 lg:hidden"
          onClick={toggleMenu}
        >
          <i
            className={isMenuOpen ? "ri-close-large-line" : "ri-menu-4-line"}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
