import Link from "next/link";

type ExternalButtonProps = {
  link: string;
  children: React.ReactNode;
};

const ExternalButton = ({ link, children }: ExternalButtonProps) => {
  return (
    <button>
      <Link
        href={link}
        target="_blank"
        className="text-xl hover:text-primeColor cursor-pointer"
      >
        {children}
      </Link>
    </button>
  );
};

export default ExternalButton;
