const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[300px] sm:min-w-[300px] w-full rounded-xl shadow-3xl px-10 py-12">
      <div className="bg-coral-red w-10 h-10 flex justify-center items-center rounded-full p-1 ">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className=" mt-5 font-palanquin text-2xl leading-normal font-bold">
        {label}
      </h3>
      <p className="text-lg mt-5 break-words font-montserrat text-slate-gray leading-normal">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
