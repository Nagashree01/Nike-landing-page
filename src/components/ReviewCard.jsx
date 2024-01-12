import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <img
        src={imgURL}
        alt={customerName}
        width={80}
        height={80}
        className="rounded-full"
      />
      <p className="info-text text-center max-w-sm mt-3">{feedback}</p>
      <div className="flex gap-3 mt-3 items-center">
        <img src={star} alt="star icon" />
        <p className="text-slate-gray">({rating})</p>
      </div>
      <h3 className="text-center font-bold font-palanquin text-3xl">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
