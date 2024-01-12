import Button from "../components/Button";
const Subscribe = () => {
  return (
    <section className="max-container flex gap-10 justify-around items-center max-lg:flex-col">
      <h3 className="text-4xl font-bold font-palanquin leading-normal">
        Sign Up for <span className="text-coral-red">Updates</span> and
        Newsletter
      </h3>
      <div className="lg:max-w-[50%] w-full  flex items-center max-sm:flex-col gap-5 p-1 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="Enter your mail address"
          className="input"
        />
        <div>
          <Button label="Sign Up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
