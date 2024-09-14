import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import ExternalButton from "../../button/ExternalButton";

const FooterIcon = () => {
  return (
    <div className="flex items-center gap-4 mb-2 text-gray-700">
      <ExternalButton link="https://github.com">{<FaGithub />}</ExternalButton>
      <ExternalButton link="https://github.com">
        {<FaFacebook />}
      </ExternalButton>
      <ExternalButton link="https://github.com">{<FaYoutube />}</ExternalButton>
    </div>
  );
};

export default FooterIcon;
