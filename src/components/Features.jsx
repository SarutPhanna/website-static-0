import { data_main_head_title } from "../../content/features";
import { data_features } from "../../content/features";
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
  const icons = [
    faDisplay,
    faHandshakeSimple,
    faIcons,
    faLaptopCode,
    faMobileScreen,
    faWrench,
  ];
  return (
    // -box main
    <section className="relative phone:p-5 tablet:p-10 laptop:p-14 desktop:p-24">
      {/* --box background */}
      <div>
        <figure>
          <img
            loading="lazy"
            className="absolute object-cover bg-cover bg-no-repeat w-full h-full top-0 left-0"
            src={BgFeatures}
            alt="Image"
          />
        </figure>
      </div>
      {/* --box background overlay */}
      <div className="absolute bg-cyan-600 bg-opacity-80 w-full h-full top-0 left-0"></div>
      {/* --box relative */}
      <section className="relative break-words">
        {/* ---box main head and title */}
        <div className="mb-8">
          <h1 className="mb-3 font-medium text-white phone:text-2xl tablet:text-4xl">
            {data_main_head_title.head}
          </h1>
          <p className="text-xl text-white phone:w-full laptop:w-4/5">
            {data_main_head_title.title}
          </p>
        </div>
        {/* ---box content */}
        <div className=" md:grid md:grid-cols-3 tablet:gap-4 laptop:gap-10">
          {data_features.map((item, index) => (
            <div key={index}>
              <h1 className="mb-3 font-medium text-white phone:text-md tablet:text-lg laptop:text-xl">
                <FontAwesomeIcon
                  className="mr-3 text-4xl"
                  icon={icons[index]}
                />
                {item.head_features}
              </h1>
              <p className="text-gray-200">{item.title_features}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Features;
