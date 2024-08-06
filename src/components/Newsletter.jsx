const Newsletter = () => {
  return (
    <>
      <div className="p-8 grid md:grid-cols-2 mx-auto max-w-[1200px]">
        <div className="text-white flex flex-col justify-center items-center md:items-start">
          <h1 className="md:text-4xl sm:text-2xl text-xl mb-2 font-bold">
            Want tips & tricks to improve your flow
          </h1>
          <p classname="text-[5px]">Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="flex flex-col p-4">
          <div className="flex flex-col md:flex-row items-center justify-center p-3">
            <input
              className="w-[250px] mx-auto rounded-sm p-2 mt-5"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] py-2 px-2 w-[150px] font-bold mx-auto mt-4 rounded-sm text-[15px] text-black md:mx-0">
              Get Started
            </button>
          </div>

          <p className="text-white mt-8 text-sm">
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a] underline">privacy policy</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
