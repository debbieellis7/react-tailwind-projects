const Blob = ({ size, color, positionClasses }) => {
  return (
    <div
      className={`w-${size} h-${size} bg-${color} rounded-full blur-3xl -z-10 
        opacity-40 absolute ${positionClasses}`}
    ></div>
  );
};

export default Blob;
