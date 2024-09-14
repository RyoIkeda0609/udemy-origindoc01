import Link from "next/link";

type HighlightButtonProps = {
  link: string;
  title: string;
  active: boolean;
};

const HighlightButton = ({ link, title, active }: HighlightButtonProps) => {
  return (
    <Link href={link}>
      <li
        className={`${
          active && `text-primeColor`
        } text-gray-600 hover:text-primeColor cursor-pointer duration-300 group-relative `}
      >
        {title}
        <span
          className={`${
            active && `scale-100`
          } absolute w-full  scale-0 group-hover:scale-100 inline-block h-[2px] -bottom-[1px] left-0 bg-primeColor duration-500`}
        ></span>
      </li>
    </Link>
  );
};

export default HighlightButton;
