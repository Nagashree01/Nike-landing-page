import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-xontainer">
      <h3 className="font-palanquin text-3xl font-bold  text-center">
        What Our <span className="text-coral-red">Customers </span>Say?
      </h3>
      <p className=" text-center info-text mt-4">
        Hear genuine stories from our satisfied customers about excetional
        customers about their exceptional experiences with us
      </p>
      <div className="flex max-lg:flex-col gap-10 justify-evenly items-center mt-16">
        {reviews.map((review) => {
          return <ReviewCard key={review.customerName} {...review} />;
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;
