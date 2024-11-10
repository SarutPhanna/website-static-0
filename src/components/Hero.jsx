import videobghero from "../assets/VideoBgHero.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { data_hero } from "../../content/hero";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    // -box main
    <section className="relative phone:h-auto phone:p-5 laptop:p-10 laptop:h-auto">
      {/* --box Background*/}
      <div>
        <video
          className="absolute bg-cover object-cover bg-no-repeat w-full h-full top-0 left-0 z-[0]"
          src={videobghero}
          autoPlay
          loop
          muted
          loading="lazy"
        />
      </div>
      {/* --box background overlay */}
      <div className="absolute bg-sky-900 bg-opacity-90 w-full h-full top-0 left-0"></div>
      {/* --box */}
      <section className=" phone:flex phone:justify-center phone:items-center">
        {/* ---box content */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 15,
            duration: 1.5,
          }}
          className="relative text-center text-white break-words tablet:w-3/4 laptop:w-3/6 desktop:w-3/6"
        >
          <div className="mb-3">
            <span className="font-logoFont phone:text-2xl tablet:text-3xl laptop:text-4xl desktop:text-5xl">
              {data_hero.head_sarut}
            </span>
            <span className="text-sky-400 font-logoFont font-semibold phone:text-2xl tablet:text-3xl laptop:text-4xl desktop:text-5xl">
              {data_hero.head_dev}
            </span>
          </div>

          <p className=" tablet:text-base laptop:text-lg desktop:text-2xl">
            {data_hero.title}
          </p>
          <div className="mt-8 gap-3 phone:flex phone:justify-center md:flex md:flex-row md:justify-center">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <button className="font-medium bg-sky-500 rounded-3xl phone:px-4 phone:py-2 phone:text-sm tablet:px-5 tablet:py-2 hover:bg-sky-700 duration-300">
                <FontAwesomeIcon
                  className="mr-3 animate-pulse"
                  icon={faArrowRight}
                />
                {data_hero.link1}
              </button>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <button className="font-medium bg-slate-50 text-black rounded-3xl phone:px-6 phone:py-2 phone:text-sm tablet:px-7 tablet:py-2 hover:bg-slate-300 duration-300">
                {data_hero.link2}
              </button>
            </a>
          </div>
        </motion.div>
      </section>
    </section>
  );
};

export default Hero;
