import { ReactComponent as WhiteLogo } from "../assets/white-logo.svg";
import { ReactComponent as Facebook } from "../assets/icon-facebook.svg";
import { ReactComponent as Youtube } from "../assets/icon-youtube.svg";
import { ReactComponent as Twitter } from "../assets/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../assets/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container flex flex-col justify-center items-center py-8 text-center text-gray-200 lg:flex-row lg:text-left lg:px-40 lg:items-start">
        <div className="w-1/3 flex flex-col justify-center items-center lg:w-1/2 lg:flex-row lg:justify-between lg:items-start">
          <div className="lg:flex lg:flex-col lg:justify-between">
            <WhiteLogo className="mb-8 lg:mb-16" />
            <div className="icons w-full flex justify-between mb-8 lg:mb-0">
              <Facebook className="cursor-pointer" />
              <Youtube className="cursor-pointer" />
              <Twitter className="cursor-pointer" />
              <Pinterest className="cursor-pointer" />
              <Instagram className="cursor-pointer" />
            </div>
          </div>
          <div className="">
            <p className="mb-4 hover:text-green-400 cursor-pointer">About Us</p>
            <p className="mb-4 hover:text-green-400 cursor-pointer">Contact</p>
            <p className="mb-4 hover:text-green-400 cursor-pointer">Blog</p>
          </div>
          <div className="">
            <p className="mb-4 hover:text-green-400 cursor-pointer">Careers</p>
            <p className="mb-4 hover:text-green-400 cursor-pointer">Support</p>
            <p className="mb-8 hover:text-green-400 cursor-pointer">Privacy Policy</p>
          </div>
        </div>

        <div className="lg:w-1/2 lg:flex lg:justify-end lg:text-right">
          <div className="">
            <button className="header-button px-8 py-2 rounded-full text-sm lg:text-base mb-8 hover:opacity-80 transition-all">
              Request Invite
            </button>
            <p className="text-gray-500">© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
