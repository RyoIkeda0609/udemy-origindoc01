import Link from "next/link";
import UnderLineBar from "./UnderLineBar";

const Logo = () => {
  return (
    <Link href={"/"} className="relative group overflow-hidden">
      <p className="text-2xl font-bold ">ORIGIN.doc</p>
      <UnderLineBar />
    </Link>
  );
};

export default Logo;
