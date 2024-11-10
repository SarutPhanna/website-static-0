import ImageLaptop from "../assets/Image_Laptop.png";
import ImageTablet from "../assets/Image_Tablet.png";
import ImagePhone from "../assets/Image_Phone.png";
import { useMemo } from "react";
import { data_showresponsive } from "../../content/ShowResponsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const ShowResponsive = () => {
  const images = useMemo(() => [ImageLaptop, ImageTablet, ImagePhone], []);
  const refs = [useRef(null), useRef(null), useRef(null)];
  const [inView, setInView] = useState({
    laptop: false,
    tablet: false,
    phone: false,
  });

  const transitionSettings = {
    type: "spring",
    stiffness: 30,
    damping: 18,
    duration: 1.5,
    delay: 0.3,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updatedInView = { ...inView };
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === refs[0].current) updatedInView.laptop = true;
            else if (entry.target === refs[1].current)
              updatedInView.tablet = true;
            else if (entry.target === refs[2].current)
              updatedInView.phone = true;
          }
        });
        setInView(updatedInView);
      },
      { threshold: 0.2 }
    );

    refs.forEach((ref) => observer.observe(ref.current));
    return () => refs.forEach((ref) => observer.unobserve(ref.current));
  }, [inView]);

  return (
    // -box main
    <section className="phone:p-5 tablet:p-10 laptop:p-14 desktop:p-20">
      {/* --box control layout */}
      <section className="break-words md:grid md:grid-cols-2 md:gap-8">
        {/* ---box images */}
        <div className="relative flex justify-center items-center phone:h-[40vh] tablet:h-[40vh] desktop:h-[65vh] min-[500px]:h-[55vh]">
          {images.map((image, index) => (
            <figure
              key={index}
              className={`absolute max-w-full h-auto ${
                index === 1 ? "phone:left-[50%]" : ""
              } ${
                index === 2
                  ? "phone:left-[77%] phone:top-[49%] tablet:top-[50%] laptop:top-[49%] desktop:top-[48%]"
                  : ""
              }`}
            >
              <motion.div
                ref={refs[index]}
                initial={{ opacity: 0, x: index === 0 ? 20 : -100 }}
                animate={
                  inView[
                    index === 0 ? "laptop" : index === 1 ? "tablet" : "phone"
                  ]
                    ? { opacity: 1, x: 0 }
                    : {}
                }
                transition={transitionSettings}
                style={{ willChange: "opacity, transform" }}
              >
                <img loading="lazy" src={image} alt="Image" />
              </motion.div>
            </figure>
          ))}
        </div>

        {/* ---box content text */}
        <div className="md:flex md:flex-col md:justify-center md:p-5">
          <h1 className="font-medium phone:text-xl tablet:text-2xl laptop:text-3xl desktop:text-4xl">
            {data_showresponsive.head_main}
          </h1>
          <div className="mt-5 mb-5">
            <h1 className="mb-3 font-medium text-lg">
              <FontAwesomeIcon className="mr-3 text-3xl" icon={faThumbsUp} />
              {data_showresponsive.head1}
            </h1>
            <p className="text-gray-600">{data_showresponsive.title1}</p>
          </div>
          <div>
            <h1 className="mb-3 font-medium text-lg">
              <FontAwesomeIcon className="mr-3 text-3xl" icon={faPalette} />
              {data_showresponsive.head2}
            </h1>
            <p className="text-gray-600">{data_showresponsive.title2}</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ShowResponsive;
