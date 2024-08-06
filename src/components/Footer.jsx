import {
  FaFacebookSquare,
  FaInstagram,
  FaDribbbleSquare,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 w-full mx-auto  p-8">
        <div className="flex flex-col ">
          <h1 className="text-[#00df9a] text-3xl">REACT</h1>
          <p className="text-white mb-5 box-border">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quis expedita nisi non exercitationem sequi omnis voluptatem unde
            dolor quaerat.
          </p>
          <div className="flex">
            <FaFacebookSquare size={40} className="text-white" />
            <FaInstagram size={40} className="text-white" />
            <FaDribbbleSquare size={40} className="text-white" />
            <FaTwitterSquare size={40} className="text-white" />
            <FaGithubSquare size={40} className="text-white" />
          </div>
        </div>
        <div className="text-white flex gap-8 pt-8 justify-between p-5">
          <ul>
            <li className="text-xl font-bold mb-3">Solutions</li>
            <li className="text-sm mb-1">Analytics</li>
            <li className="text-sm mb-1">Marketing</li>
            <li className="text-sm mb-1">Commerce</li>
            <li className="text-sm mb-1">Insights</li>
          </ul>
          <ul>
            <li className="text-xl font-bold mb-3">Solutions</li>
            <li className="text-sm mb-1">Analytics</li>
            <li className="text-sm mb-1">Marketing</li>
            <li className="text-sm mb-1">Commerce</li>
            <li className="text-sm mb-1">Insights</li>
          </ul>
        </div>
        <div className="text-white p-5">
          <ul>
            <li className="text-xl font-bold mb-3">Solutions</li>
            <li className="text-sm mb-1">Analytics</li>
            <li className="text-sm mb-1">Marketing</li>
            <li className="text-sm mb-1">Commerce</li>
            <li className="text-sm mb-1">Insights</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
