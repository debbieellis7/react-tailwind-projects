const DecorativeIcon = ({
  icon,
  size,
  color,
  positionClasses,
  animationClasses,
  additionalClasses,
}) => {
  // Mapping size prop to valid Tailwind CSS size classes
  const sizeClasses = {
    small: "text-sm",
    medium: "text-lg",
    large: "text-4xl",
    xlarge: "text-6xl",
  };

  return (
    <div
      className={`absolute ${positionClasses} opacity-30 ${animationClasses} ${additionalClasses}`}
    >
      <i className={`${icon} ${sizeClasses[size]} text-${color}`}></i>
    </div>
  );
};

export default DecorativeIcon;
