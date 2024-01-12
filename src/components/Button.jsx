const Button = ({ label, iconURL }) => {
  return (
    <button className="px-7 py-3 border-coral-red border-2 flex justify-center items-center bg-coral-red  rounded-full text-white gap-2 text-lg leading-none font-montserrat">
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full"
          width={20}
          height={20}
        />
      )}
    </button>
  );
};

export default Button;
