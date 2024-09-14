import { IoClose } from "react-icons/io5";

type CloseHamburgerMenuButtonProps = {
  closeHamburgerMenu: () => void;
};

const CloseHamburgerMenuButton = ({
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

export default CloseHamburgerMenuButton;
