import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center text-white mx-auto p-4 mb-5">
      <h1 className="w-full font-bold text-[#00df9a] text-3xl">REACT.</h1>
      <ul className="hidden md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">SignIn</li>
        <li className="p-4">
          <button>GetStarted</button>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-300 h-full  bg-gray-800 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul>
          <li className="p-4 border-b border-gray-400">Home</li>
          <li className="p-4 border-b border-gray-400">About</li>
          <li className="p-4 border-b border-gray-400">Sign In</li>
          <li className="p-4 border-b border-gray-400">
            <button>Get Started</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
