import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

type OpenHamburgerMenuButtonProps = {
  openHamburgerMenu: () => void;
};

export const OpenHamburgerMenuButton = ({
  openHamburgerMenu,
}: OpenHamburgerMenuButtonProps) => {
  return (
    <div
      onClick={openHamburgerMenu}
      className="w-7 h-5 group lg:hidden flex flex-col justify-between cursor-pointer "
    >
      <CiMenuBurger />
    </div>
  );
};

type CloseHamburgerMenuButtonProps = {
  closeHamburgerMenu: () => void;
};

export const CloseHamburgerMenuButton = ({
  closeHamburgerMenu,
}: CloseHamburgerMenuButtonProps) => {
  return (
    <span
      onClick={closeHamburgerMenu}
      className="absolute right-2 top-8 text-3xl text-red-200 hover:text-red-600 cursor-pointer duration-300"
    >
      <IoClose />
    </span>
  );
};
