import {
  faFacebook,
  faGithubAlt,
  faLinkedin,
  faSquareInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    // -Box
    <div className="break-words">
      {/* --Box */}
      <div className="text-sm px-10 py-5 md:grid md:grid-cols-2">
        {/* ---Box */}
        <div className="font-logoFont text-center tablet:text-start phone:mb-2 tablet:m-0 laptop:m-0">
          <span className="text-xl font-semibold">SARUT.</span>
          <span className="text-xl text-sky-500 font-semibold">DEV</span>
        </div>
        {/* ---Box */}
        <ul className="text-sm phone:flex phone:justify-center phone:gap-5 tablet:flex tablet:justify-end tablet:gap-5">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              className="text-2xl text-blue-900"
              icon={faLinkedin}
            />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              className="text-2xl text-black"
              icon={faGithubAlt}
            />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              className="text-2xl text-red-700"
              icon={faSquareInstagram}
            />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              className="text-2xl text-blue-600"
              icon={faFacebook}
            />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              className="text-2xl text-black"
              icon={faSquareXTwitter}
            />
          </a>
        </ul>
      </div>
      {/* --Box */}
      <div className="py-3 px-3 border-t-2 text-sm text-gray-500 text-center">
        <p>
          Materials by Sarut.Dev are free to use for demo purposes with credit.
        </p>
      </div>
    </div>
  );
};

export default Footer;
