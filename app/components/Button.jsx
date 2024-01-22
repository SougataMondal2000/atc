const Button = ({
  label,
  onClick,
  bgColor,
  textColor,
  logo,
  hoverBgColor,
  hoverTextColor,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        ":hover": {
          backgroundColor: hoverBgColor,
          color: hoverTextColor,
        },
      }}
      className="lg:h-12 h-10  w-fit lg:px-6 md:px-4 px-2 lg:rounded-lg rounded-md text-white lg:text-base text-sm font-semibold border border-blue-600 flex justify-center items-center md:gap-2 gap-1"
    >
      {logo}
      {label}
    </button>
  );
};

export default Button;
