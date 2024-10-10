const SocialIcons = ({ icons }) => {
  return (
    <div className="bg-yellow-100 text-lg text-center space-x-2">
      {icons.map((icon, index) => (
        <a key={index} href={icon.href}>
          <i
            className={`${icon.className} hover:text-yellow-500 duration-300 cursor-pointer`}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
