import {
  faDisplay,
  faHandshakeSimple,
  faIcons,
  faLaptopCode,
  faMobileScreen,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BgFeatures from "../assets/Bg-Features.jpg";

const Features = () => {
  return (
    // -Box
    <div className="relative phone:p-5 tablet:p-10 laptop:p-14 desktop:p-24">
      {/* --Box Background */}
      <div>
        <img
          className="absolute object-cover bg-cover bg-no-repeat w-full h-full top-0 left-0"
          src={BgFeatures}
          alt="Image"
        />
      </div>
      {/* --Box background Overlay */}
      <div className="absolute bg-cyan-600 bg-opacity-80 w-full h-full top-0 left-0"></div>
      {/* --Box */}
      <div className="relative break-words">
        {/* ---Box */}
        <div className="mb-8">
          <h1 className="mb-3 font-medium text-white phone:text-2xl tablet:text-4xl">
            What You'll Experience with Our Services
          </h1>
          <p className="text-xl text-white phone:w-full laptop:w-4/5">
            We're committed to delivering an exceptional experience for your
            business, offering comprehensive support both before and after our
            service. Let us help elevate your business to new heights.
          </p>
        </div>
        {/* ---Box */}
        <div className=" md:grid md:grid-cols-3 tablet:gap-4 laptop:gap-10">
          <div className="mb-5">
            <h1 className="mb-3 font-medium text-white phone:text-md tablet:text-lg laptop:text-xl">
              <FontAwesomeIcon className="mr-3 text-4xl" icon={faDisplay} />
              Website templates
            </h1>
            <p className="text-gray-200">
              Select the perfect template for your business from our diverse
              collection, or customize one to fit your unique needs.
            </p>
          </div>
          <div className="mb-5">
            <h1 className="mb-3 font-medium text-white phone:text-md tablet:text-lg laptop:text-xl">
              <FontAwesomeIcon className="mr-3 text-4xl" icon={faLaptopCode} />
              Writing code
            </h1>
            <p className="text-gray-200">
              Elevate your organization and business with the power of coding
              knowledge.
            </p>
          </div>
          <div className="mb-5">
            <h1 className="mb-3 font-medium text-white phone:text-md tablet:text-lg laptop:text-xl">
              <FontAwesomeIcon
                className="mr-3 text-4xl"
                icon={faMobileScreen}
              />
              Mobile Screen Support
            </h1>
            <p className="text-gray-200">
              Supports all screens, whether mobile phones, tablets, notebooks,
              desktops.
            </p>
          </div>
          <div className="mb-5">
            <h1 className="mb-3 font-medium text-white phone:text-md tablet:text-lg laptop:text-xl">
              <FontAwesomeIcon
                className="mr-3 text-4xl"
                icon={faHandshakeSimple}
              />
              Provide advice
            </h1>
            <p className="text-gray-200">
              We’re here to offer expert guidance, and when you choose our
              services, we’re dedicated to ensuring your website achieves top
              rankings in search results.
            </p>
          </div>
          <div className="mb-5">
            <h1 className="mb-3 font-medium text-white phone:text-md tablet:text-lg laptop:text-xl">
              <FontAwesomeIcon className="mr-3 text-4xl" icon={faWrench} />
              Maintenance
            </h1>
            <p className="text-gray-200">
              Designed for effortless customization and easy maintenance, our
              solutions ensure your website remains current and performs at its
              best.
            </p>
          </div>
          <div>
            <h1 className="mb-3 font-medium text-white phone:text-md tablet:text-lg laptop:text-xl">
              <FontAwesomeIcon className="mr-3 text-4xl" icon={faIcons} />
              Enjoy our website
            </h1>
            <p className="text-gray-200">
              You can visit our website and use our website template as a
              guideline for your organization or anyone who wants to practice
              making websites. We hope that it will be the answer for you.
              Enjoy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
