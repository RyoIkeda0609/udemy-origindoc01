import React from "react";
import Container from "./Container";
import { footerListItem } from "@/app/constants";

import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-blueLight mt-10 ">
      <Container>
        <div className="text-sm flex flex-col md:flex-row md:item-center gap-2  justify-center mb-2 ">
          <p className="mb-2 text-gray-700">&copy; ORIGIN.Doc</p>
          <ul className="flex items-center gap-2 mb-2 ">
            {footerListItem.map((item) => (
              <Link href={item.link} key={item.id}>
                <li className="flex items-center gap-2 text-gray-500 hover:text-primeColor duration-300 cursor-pointer">
                  {item.title}
                  {item.icon && <TbMinusVertical />}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex items-center gap-4 mb-2 text-gray-700">
            <a
              href="github.com"
              target="_blank"
              className="text-xl hover:text-primeColor cursor-pointer"
            >
              {<FaGithub />}
            </a>
            <a
              href="facebook.com"
              target="_blank"
              className="text-xl hover:text-primeColor cursor-pointer"
            >
              {<FaFacebook />}
            </a>
            <a
              href="youtube.com"
              target="_blank"
              className="text-xl hover:text-primeColor cursor-pointer"
            >
              {<FaYoutube />}
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
