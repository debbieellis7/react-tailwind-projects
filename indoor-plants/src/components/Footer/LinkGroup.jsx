const LinkGroup = ({ title, links }) => {
  return (
    <div>
      <p className="mb-5 font-bold text-xl">{title}</p>
      <ul className="flex flex-col gap-1">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:underline">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkGroup;
