import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
const Pricing = () => {
  return (
    <>
      <div className="bg-white w-full p-20">
        <div className="max-w-[1200px] grid md:grid-cols-3 gap-8 mx-auto">
          <div className="flex flex-col justify-center items-center border-2 p-5 rounded-sm shadow-md  bg-white hover:scale-105 duration-150">
            <img className="w-20 h-15" src={Single} alt="Single" />
            <h1 className="text-3xl font-bold mt-4">Single User</h1>
            <p className="text-4xl mt-3 mb-3 font-extrabold">$149</p>
            <p className="font-bold mt-2 border-b-2">500 GB Storage</p>
            <p className="font-bold mt-2 border-b-2">1 Granted User</p>
            <p className="font-bold mt-2 border-b-2">Send up to 2 GB</p>
            <button className="bg-[#00df9a] py-2 px-2 w-[150px] font-bold mx-auto mt-8 rounded-sm text-[15px] text-black md:mx-0">
              Start Trial
            </button>
          </div>
          <div className="flex flex-col justify-center items-center border-2 p-5 rounded-sm shadow-md  bg-white hover:scale-105 duration-150">
            <img className="w-20 h-15" src={Double} alt="Single" />
            <h1 className="text-3xl font-bold mt-4">Double User</h1>
            <p className="text-4xl mt-3 mb-3 font-extrabold">$249</p>
            <p className="font-bold mt-2 border-b-2">500 GB Storage</p>
            <p className="font-bold mt-2 border-b-2">1 Granted User</p>
            <p className="font-bold mt-2 border-b-2">Send up to 2 GB</p>
            <button className="bg-[#00df9a] py-2 px-2 w-[150px] font-bold mx-auto mt-8 rounded-sm text-[15px] text-black md:mx-0">
              Start Trial
            </button>
          </div>
          <div className="flex flex-col justify-center items-center border-2 p-5 rounded-sm shadow-md  bg-white hover:scale-105 duration-150">
            <img className="w-20 h-15" src={Triple} alt="Single" />
            <h1 className="text-3xl font-bold mt-4">Triple User</h1>
            <p className="text-4xl mt-3 mb-3 font-extrabold">$349</p>
            <p className="font-bold mt-2 border-b-2">500 GB Storage</p>
            <p className="font-bold mt-2 border-b-2">1 Granted User</p>
            <p className="font-bold mt-2 border-b-2">Send up to 2 GB</p>
            <button className="bg-[#00df9a] py-2 px-2 w-[150px] font-bold mx-auto mt-8 rounded-sm text-[15px] text-black md:mx-0">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
