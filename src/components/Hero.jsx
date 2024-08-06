import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <>
      <div className="text-white">
        <div className="mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
          <p className="text-[#00df9a] font-bold text-2xl">
            GROWING WITH DATA ANALYTICS
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold my-3">
            Grow With Data
          </h1>
          <div>
            <p className="md:text-5xl sm:text-4xl text-xl font-bold">
              Fast, Flexible Financing For
              <ReactTyped
                className="pl-4 md:text-5xl sm:text-4xl text-xl font-bold "
                strings={["BTB", "BTC", "SAAS"]}
                typeSpeed={100}
                backSpeed={100}
                loop
              />
            </p>
          </div>
          <p className="md:text-3xl sm:text-2xl text-xl font-bold mt-3 text-[#4c4d4c]">
            Monitor Your Data Analytics To Increase Your BTC, BTB & SAAS Revenue
          </p>
          <button className="bg-[#00df9a] py-3 px-3 w-[200px] font-bold mx-auto mt-4 rounded-sm text-[20px] text-black">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
