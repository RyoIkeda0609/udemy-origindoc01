"use client";

import Logo from "./Logo";
import Button from "../../button/Button";
import HeaderMenu from "./HeaderMenu";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <div className="w-full h-20 bg-white p-2">
      <div className="h-full max-w-screen-2xl mx-auto flex items-center justify-between">
        <Logo />

        <div className="hidden lg:inline-flex items-center gap-8 text-sm font-semibold tracking-wider ">
          <HeaderMenu />
          <Button label="連絡する" link="/contact" />
        </div>
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Header;
