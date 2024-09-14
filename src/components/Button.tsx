import Link from "next/link";

type ButtonProps = {
  label: string;
  link: string;
};

const Button = ({ label, link }: ButtonProps) => {
  return (
    <button className="w-36 h-10 bg-darkBlue text-white rounded-md hover:bg-primeColor duration-300">
      <Link href={link}>{label}</Link>
    </button>
  );
};

export default Button;
