import Link from "next/link";
import { footerListItems } from "@/app/constants";
import { TbMinusVertical } from "react-icons/tb";

const FooterMenu = () => {
  return (
    <>
      <p className="mb-2 text-gray-700">&copy; ORIGIN.Doc</p>
      <ul className="flex items-center gap-2 mb-2 ">
        {footerListItems.map((item) => (
          <Link href={item.link} key={item.id}>
            <li className="flex items-center gap-2 text-gray-500 hover:text-primeColor duration-300 cursor-pointer">
              {item.title}
              {item.icon && <TbMinusVertical />}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default FooterMenu;
