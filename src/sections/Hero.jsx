import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex  min-h-screen  max-container xl:flex-row flex-col justify-center gap-10"
    >
      <div className="relative w-full xl:w-2/5 flex flex-col justify-center items-start pt-28 max-xl:padding-x">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-[6rem] max-lg:text-[4rem] max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br /> <span className="text-coral-red inline-block mt-3">Nike</span>
          Shoes
        </h1>
        <p className="text-lg leading-8 text-slate-gray mt-6 mb-14 font-montserrat sm:max-w-sm">
          Discover stylish Nike arrivals,quality comfort and innovation for your
          active life
        </p>

        <Button label={"Shop Now"} iconURL={arrowRight} />
        <div className="flex flex-wrap w-full justify-start items-start gap-12 mt-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImage}
          alt="Shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[10%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imageURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
