// importation for navigation bar
/*----------------End-------------------*/
import { FaAngleDown } from "react-icons/fa6";
import "./Desktopcss.css";

const Home = () => {
  return (
    <>
      <header className="w-full h-[100px] bg-blue-700 selection-none border-b-gray-300 border-opacity-20 ">
        <div className="hidden md:hidden lg:flex justify-around items-center w-full h-full">
          <ul className="flex gap-10 text-white font-Alata font-semibold">
            <li>
              <a
                href="#"
                className="nav-link"
              >
                <div className="relative group inline-block">
                  <div>
                    <p className="flex items-center gap-2">
                       HOME
                   <FaAngleDown className="text-sm" />
                    </p>
                  </div>
                  <div className="absolute top-full left-0 w-[80px] h-6 z-10"></div>
                    <div className="dropdown-menu-do ">
                    <ul className="px-4 py-2 text-white cursor-pointer text-[11px] tracking-wide">
                      <li>
                        Reservation
                      </li>

                    </ul>

                  </div>
                </div>
              </a>
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
              <a href="#" className="nav-link">
                <div className="relative group inline-block">
                  <div>
                  <p className="flex items-center gap-2">
                    CONTACT
                    <FaAngleDown className="text-sm" />
                  </p>
                  </div>
                  <div className="absolute top-full left-0 w-[80px] h-6 z-10"></div>
                  <div className="dropdown-menu">
                    <ul className="px-4 py-2 text-white cursor-pointer text-[11px] tracking-wide">
                      <li>
                        Reservation
                      </li>

                    </ul>

                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="nav-link">
                SHOP
              </a>
            </li>
          </ul>

          <a href="">
          <h1 className="font-jost text-white font-lighter text-[67px]">P</h1>
          </a>

          <ul className="flex gap-10 text-gray-700 font-normal">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">OUR MENU</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Home;
