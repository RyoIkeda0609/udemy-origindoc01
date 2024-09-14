import Container from "../../parts/Container";
import FooterMenu from "./FooterMenu";
import FooterIcon from "./FooterIcon";

const Footer = () => {
  return (
    <div className="w-full bg-blueLight mt-10 ">
      <Container>
        <div className="text-sm flex flex-col md:flex-row md:item-center gap-2  justify-center mb-2 ">
          <FooterMenu />
          <FooterIcon />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
