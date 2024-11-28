import "../../styles/Header.css";
import FirstNav from "./FirstNav";
import SecondNav from "./SecondNav";
import MessageSlider from "./MessageSlider";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  return (
    <header className="relative w-full">
      <FirstNav />
      <SecondNav />
    </header>
  );
};

export default NavBar;
