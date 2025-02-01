import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const social_icons = [
    <FaFacebookF />,
    <FaGithub />,
    <FaLinkedin />,
    <FaXTwitter />,
    <FaYoutube />,
    <FaInstagram />,
  ];
  return (
    <>
      <div className="flex items-center flex-col-reverse justify-center md:flex-row md:justify-between m-5">
        <div className="text-xl font-light text-center">
          <p>&copy; 2025 To Do App, All rights are reserved.</p>
        </div>
        <div>
          <ul className="flex flex-wrap justify-center items-center space-x-5">
            {social_icons.map((icon, idx) => (
              <li
                key={idx}
                className=" m-5 text-2xl hover:text-hover cursor-pointer transition-all duration-500"
              >
                {icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Footer;
