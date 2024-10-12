import DecorativeImages from "./DecorativeImages";
import formatToAnchor from "../../utils/formatToAnchor";

const NavigationMenu = ({
  menuItems,
  isMenuOpen,
  toggleMenu,
  activeSection,
}) => (
  <div
    className={`absolute top-0 ${
      isMenuOpen ? "left-0" : "left-[-100%]"
    } min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}
  >
    <ul className="flex flex-col items-center gap-8 lg:flex-row">
      {menuItems.map((item) => (
        <li key={item}>
          <a
            href={`#${formatToAnchor(item)}`}
            className={`nav-link ${activeSection === item ? "active" : ""}`}
            onClick={toggleMenu}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>

    {/* Decorative images */}
    <DecorativeImages />
  </div>
);

export default NavigationMenu;
