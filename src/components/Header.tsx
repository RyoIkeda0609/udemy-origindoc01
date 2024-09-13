import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-20 border-b-[1px] border-gray-500 bg-white">
      <div className="h-full max-w-screen-2xl mx-auto flex items-center ">
        <Link href={"/"} className="relative group overflow-hidden">
          <p className="text-2xl font-bold ">ORIGIN.doc</p>
          <span
            className="absolute bottom-0 w-full h-[2px] inline-block bg-primeColor -translate-x-[100%]
            group-hover:translate-x-0
            transition-transform
            duration-700"
          ></span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
