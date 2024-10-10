const Button = ({ text, icon, outline }) => {
  const buttonClass = outline ? "btn btn_outline" : "btn";

  return (
    <button className={buttonClass}>
      <span>{text}</span>
      <i className={icon}></i>
    </button>
  );
};

export default Button;
