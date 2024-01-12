import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 justify-start flex-col w-full max-sm:w-full ">
      <img src={imgURL} alt={name} />
      <div className="mt-6 flex justify-start gap-2.5">
        <img src={star} alt="star rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="font-palanquin font-semibold text-2xl leading-normal mt-2">
        {name}
      </h3>
      <p className="text-coral-red font-montserrat text-xl font-semibold leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
