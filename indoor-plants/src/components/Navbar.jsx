const toogleNavMenu = () => {
  const navMenu = document.querySelector("#nav-menu");
  navMenu.classList.toggle("left-[0]");

  const hamburger = document.querySelector("#hamburger");
  hamburger.classList.toggle("ri-close-large-line");
};

const Navbar = () => {
  const handleCLick = () => {
    toogleNavMenu();
  };

  return (
    <header id="navbar" className="bg-green-950 fixed w-full top-0 left-0 z-50">
      <nav className="container flex items-center justify-between h-16 sm:h-20">
        <div className="font-Lobster sm:text-2xl">IndoorPlants</div>

        <div
          id="nav-menu"
          className="absolute top-0 left-[-100%] min-h-[80vh] w-full bg-green-950/80 
          backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden 
          lg:static lg:min-h-fit lg:bg-transparent lg:w-auto"
        >
          <ul className="flex flex-col items-center gap-8 lg:flex-row">
            <li>
              <a href="#home" className="nav-link" onClick={handleCLick}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="nav-link" onClick={handleCLick}>
                About
              </a>
            </li>

            <li>
              <a href="#popular" className="nav-link" onClick={handleCLick}>
                Popular
              </a>
            </li>

            <li>
              <a href="#review" className="nav-link" onClick={handleCLick}>
                Review
              </a>
            </li>
          </ul>

          <div className="absolute buttom-0 -right-10 opacity-90 lg:hidden">
            <img
              src="../src/assets/leaf-1.png"
              alt="leaf_image"
              className="w-32"
            />
          </div>

          <div className="absolute -top-5 -left-5 rotate-90 opacity-90 lg:hidden">
            <img
              src="../src/assets/leaf-2.png"
              alt="leaf_image"
              className="w-32"
            />
          </div>
        </div>

        <div className="text-xl sm:text-3xl cursor-pointer z-50 lg:hidden">
          <i id="hamburger" className="ri-menu-4-line" onClick={handleCLick} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
