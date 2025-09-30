

import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import "./Desktopcss.css";

const Home = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);



   const showPopup = () => {
    if (isPopupVisible) return;
    setPopupVisible(true);
    setTimeout(() => setPopupVisible(false), 1000);
  };
  return (
    <>
      <header className="w-full h-[100px] bg-blue-700 selection-none border-b-gray-300 border-opacity-20 ">
        <div className="hidden md:hidden lg:flex justify-around items-center w-full h-full">
          <ul className="flex gap-10 text-white font-alata font-semibold">

            
            
            <li>
  <div className="relative group inline-block">
    <a href="#" className="nav-link">
      <p className="flex items-center gap-2">
        HOME
        <FaAngleDown className="text-sm" />
      </p>
                </a>
        <div className="absolute top-full left-0 w-[80px] h-6 z-10"></div>

    <div className="dropdown-menu-do">
      <ul className=" text-white cursor-pointer text-[11px] ">
        <li>Reservation</li>
      </ul>
    </div>
  </div>
</li>


            <li>
              <a href="#" className="nav-link flex">
                ABOUT

              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                OUR MENU
              </a>
            </li>
           
           <li>
  <div className="relative group inline-block">
    <a href="#" className="nav-link">
      <p className="flex items-center gap-2">
        CONTACT
        <FaAngleDown className="text-sm" />
      </p>
                </a>
                                <div className="absolute top-full left-0 w-[80px] h-6 z-10"></div>

    <div className="dropdown-menu">
      <ul className="px-4 py-2 text-white cursor-pointer text-[11px] tracking-wide">
        <li>Reservation</li>
      </ul>
    </div>
  </div>
</li>

   <li>
              <a href="#" className="nav-link">
                SHOP
              </a>
            </li>
          </ul>

          <a href="">
          <h1 className="font-jost text-white font-lighter text-[67px]">P.</h1>
          </a>
          

          <ul className="flex gap-10 text-gray-700 font-normal text-white">

            <li>
            <a href="https://www.facebook.com">
              <FaFacebookF className="text-[17px] animate-pulse hover:scale-150" />
            </a>
          </li>

           <li>
            <a href="https://www.twitter.com">
              <FaTwitter className="text-[19px] animate-pulse hover:scale-150" />
            </a>
            </li>
            
             <li>
            <a href="https://www.instagram.com">
              <FaInstagram className="text-[17px] animate-pulse hover:scale-150" />
            </a>
          </li>

              <li>
            <a href="https://www.pinterest.com">
              <FaPinterest className="text-[17px] animate-pulse hover:scale-150" />
            </a>
          </li>

           <li>
            <a href="https://www.youtube.com">
              <FaYoutube className="text-[19px] animate-pulse hover:scale-150" />
            </a>
            </li>

            <li>
            <div className="relative group inline-block">
              <div className="cursor-pointer">
                <FaShoppingBag
                  onMouseEnter={showPopup}
                  className="text-[17px] animate-pulse opacity:95 hover:scale-150"
                />
              </div>

              <div className="absolute top-full right-0 w-[30px] h-8 z-10"></div>

              <div className="absolute right-0 mt-8 w-96 h-24 bg-black flex justify-center items-center rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-1 transition-all duration-200 z-10">
                <p className="px-4 py-2 text-white cursor-pointer text-[11px] tracking-wide">
                  No products in the cart
                </p>
              </div>

              {/* // Popup  */}

              {isPopupVisible && <Popup message="View your shopping cart" />}
            </div>
          </li>

            
          </ul>
        </div>
      </header>
    </>
  );
};

export default Home;
