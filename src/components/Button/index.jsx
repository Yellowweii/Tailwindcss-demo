const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center px-7 py-4 gap-2 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
      {label}
      {iconURL && <img src={iconURL} alt="arrow right icon" className="w-5 h-5 ml-2 rounded-full" />}
    </button>
  );
};

export default Button;
