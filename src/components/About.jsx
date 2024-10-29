import BgAbout from "../assets/Bg-About.jpg";

const About = () => {
  return (
    // -Box
    <div className="relative flex items-center justify-center break-words phone:p-5 h-auto phone:text-center laptop:text-start tablet:p-10 laptop:p-14">
      {/* --Box Background */}
      <div>
        <img
          className="absolute object-cover bg-cover bg-no-repeat w-full h-full top-0 left-0"
          src={BgAbout}
          alt="Image"
        />
      </div>
      {/* --Box background Overlay */}
      <div className="absolute bg-white opacity-80 w-full h-full top-0 left-0"></div>
      {/* --Box */}
      <div className=" phone:w-auto phone:text-sm laptop:text-base laptop:w-4/5">
        {/* ---Box */}
        <div className="relative">
          <h1 className="mb-5 phone:text-2xl tablet:text-3xl laptop:text-4xl font-medium">
            Our Vision and Mission
          </h1>
          <p className="mb-8 text-gray-80 font-medium">
            As a team of web developers, we specialize in designing websites for
            small and large businesses and organizations that want to promote
            their products online. Whether you want to increase your online
            presence or learn the art of website building, we are here to
            support you.
          </p>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <button className="bg-sky-500 px-5 py-2 rounded-2xl text-white text-sm font-semibold hover:shadow-xl">
              LEARN MORE
            </button>
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
