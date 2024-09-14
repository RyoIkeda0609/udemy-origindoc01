import UnderLineButton from "./UnderLineButton";
import { useEffect, useState } from "react";
import { headerListItems } from "@/app/constants";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const [active, setActive] = useState("");
  const pathName = usePathname();

  useEffect(() => {
    setActive(pathName);
  }, [pathName]);

  return (
    <ul className="flex gap-8">
      {headerListItems.map((item) => (
        <UnderLineButton
          key={item.id}
          link={item.link}
          title={item.title}
          active={item.link === active}
        />
      ))}
    </ul>
  );
};

export default HeaderMenu;
