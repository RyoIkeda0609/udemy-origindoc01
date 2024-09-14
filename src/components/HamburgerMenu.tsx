import Link from "next/link";
import HamburgerMenuButton from "./HamburgerMenuButton";
import CloseHamburgerMenuButton from "./CloseHamburgerMenuButton";
import { useState } from "react";
import { headerListItems } from "@/app/constants";

const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const openHamburgerMenu = () => setShowMenu(true);
  const closeHamburgerMenu = () => setShowMenu(false);

  return (
    <>
      <HamburgerMenuButton openHamburgerMenu={openHamburgerMenu} />
      {showMenu && (
        <div className="w-full h-screen lg:hidden fixed top-0 left-0 bg-darkBlue bg-opacity-90 z-50 ">
          <CloseHamburgerMenuButton closeHamburgerMenu={closeHamburgerMenu} />
          <Link href={"/"} onClick={closeHamburgerMenu}>
            <p className="text-2xl font-bold text-white mb-4 ">ORIGIN.Doc</p>
          </Link>
          <ul className="flex flex-col text-gray-300 text-sm gap-6 font-semibold px-4">
            {headerListItems.map((item) => (
              <Link href={item.link} key={item.id} onClick={closeHamburgerMenu}>
                <li className="hover:text-white cursor-pointer duration-300 ">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
