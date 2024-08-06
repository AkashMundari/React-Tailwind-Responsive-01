import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <>
      <div className="w-full bg-white py-16 px-4 mt-2">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 ">
          <img className="mx-auto my-4 w-[500px]" src={Laptop} alt="/"></img>
          <div className="flex flex-col justify-center p-2">
            <p className="text-[#00df9a] md:text-3xl sm:text-2xl text-xl font-bold mb-1">
              Data Analytics Dashboard
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold mb-2">
              Manage Data Analytics Centrally
            </h1>
            <p className="md:2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo qui
              obcaecati quas tenetur debitis, quae possimus facilis dolores
              quis, voluptates dolore adipisci eum perferendis deleniti delectus
              dicta dignissimos mollitia! Quam.
            </p>
            <button className="bg-[#00df9a] py-3 px-3 w-[200px] font-bold mx-auto mt-4 rounded-sm text-[20px] text-black md:mx-0">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
