import BgAbout from "../assets/Bg-About.jpg";
import { data_about } from "../../content/about";

const About = () => {
  return (
    // -box mian
    <section className="relative flex items-center justify-center break-words phone:p-5 h-auto phone:text-center laptop:text-start tablet:p-10 laptop:p-14">
      {/* --box background */}
      <div>
        <figure>
          <img
            loading="lazy"
            className="absolute object-cover bg-cover bg-no-repeat w-full h-full top-0 left-0"
            src={BgAbout}
            alt="Image"
          />
        </figure>
      </div>
      {/* --box background overlay */}
      <div className="absolute bg-white opacity-80 w-full h-full top-0 left-0"></div>
      {/* --box content */}
      <div className="phone:w-auto phone:text-sm laptop:text-base laptop:w-4/5">
        {/* ---box */}
        <div className="relative">
          <h1 className="mb-5 phone:text-2xl tablet:text-3xl laptop:text-4xl font-medium">
            {data_about.head}
          </h1>
          <p className="mb-8 text-gray-80 font-medium">{data_about.title}</p>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <button className="bg-sky-500 px-5 py-2 rounded-2xl text-white text-sm font-semibold hover:shadow-xl">
              {data_about.link}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
