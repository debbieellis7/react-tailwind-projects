import Newsletter from "./Newsletter";
import SocialIcons from "./SocialIcons";
import Branding from "./Branding";
import LinkGroup from "./LinkGroup";
import Copyright from "./Copyright";
import floral1 from "../../assets/floral-1.png";

const Footer = () => {
  const socialIcons = [
    { className: "ri-facebook-fill", href: "#" },
    { className: "ri-twitter-x-fill text-base", href: "#" },
    { className: "ri-instagram-fill", href: "#" },
    { className: "ri-linkedin-fill", href: "#" },
  ];

  const quickLinks = [
    { text: "Plants", href: "#" },
    { text: "Flowers", href: "#" },
    { text: "Gardening", href: "#" },
    { text: "Seeds", href: "#" },
    { text: "Shipping", href: "#" },
  ];

  const popularServices = [
    { text: "Tree Planting", href: "#" },
    { text: "Grass Cutting", href: "#" },
    { text: "Weeds Control", href: "#" },
    { text: "Project", href: "#" },
  ];

  const contactInfo = [
    { text: "+77 333 78 902", href: "tel:+7733378902" },
    {
      text: "indoorplants@testmail.com",
      href: "mailto:indoorplants@testmail.com",
    },
    { text: "3241 Tailwind Ave, CSS City Webland 7890, USA", href: "#" },
  ];

  return (
    <footer className="bg-yellow-100 text-green-950 pt-20 pb-10 md:pt-28 relative">
      {/* Newsletter */}
      <Newsletter />

      {/* Social icons */}
      <div className="container mt-16 mb-10">
        <div className="border-b border-green-500 relative">
          <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0 max-w-36 mx-auto">
            <SocialIcons icons={socialIcons} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start">
        <Branding />
        <LinkGroup title="Quick Link" links={quickLinks} />
        <LinkGroup title="Popular Services" links={popularServices} />
        <LinkGroup title="Contact Us" links={contactInfo} />
      </div>

      {/* Copyright */}
      <Copyright />

      {/* Floral image */}
      <div className="absolute bottom-0 left-0 opacity-20 pointer-events-none">
        <img src={floral1} className="w-full lg:w-1/2" alt="floral_image" />
      </div>
    </footer>
  );
};

export default Footer;
