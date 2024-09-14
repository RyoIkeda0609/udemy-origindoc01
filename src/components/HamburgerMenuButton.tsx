import { CiMenuBurger } from "react-icons/ci";

type HamburgerMenuButtonProps = {
  openHamburgerMenu: () => void;
};

const HamburgerMenuButton = ({
  openHamburgerMenu,
}: HamburgerMenuButtonProps) => {
  return (
    <div
      className="w-7 h-5 group lg:hidden flex flex-col justify-between cursor-pointer "
      onClick={openHamburgerMenu}
    >
      <CiMenuBurger />
    </div>
  );
};

export default HamburgerMenuButton;
