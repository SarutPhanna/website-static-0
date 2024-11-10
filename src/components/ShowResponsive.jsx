import ImageLaptop from "../assets/Image_Laptop.png";
import ImageTablet from "../assets/Image_Tablet.png";
import ImagePhone from "../assets/Image_Phone.png";
import { data_showresponsive } from "../../content/ShowResponsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const ShowResponsive = () => {
  const laptopRef = useRef(null);
  const tabletRef = useRef(null);
  const phoneRef = useRef(null);
  const [inView, setInView] = useState({
    laptop: false,
    tablet: false,
    phone: false,
  });

  // for laptop
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;
          if (entry.target === laptopRef.current) {
            setInView((prev) => ({ ...prev, laptop: isVisible }));
          } else if (entry.target === tabletRef.current) {
            setInView((prev) => ({ ...prev, tablet: isVisible }));
          } else if (entry.target === phoneRef.current) {
            setInView((prev) => ({ ...prev, phone: isVisible }));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (laptopRef.current) observer.observe(laptopRef.current);
    if (tabletRef.current) observer.observe(tabletRef.current);
    if (phoneRef.current) observer.observe(phoneRef.current);

    return () => {
      if (laptopRef.current) observer.unobserve(laptopRef.current);
      if (tabletRef.current) observer.unobserve(tabletRef.current);
      if (phoneRef.current) observer.unobserve(phoneRef.current);
    };
  }, []);

  return (
    // -box main
    <section className="phone:p-5 tablet:p-10 laptop:p-14 desktop:p-20">
      {/* --box control layout */}
      <section className="break-words md:grid md:grid-cols-2 md:gap-8">
        {/* ---box content image */}
        <div
          className="relative flex justify-center items-center 
          phone:h-[40vh] tablet:h-[40vh] desktop:h-[65vh] min-[500px]:h-[55vh]"
        >
          {/* image-laptop */}
          <figure className="absolute max-w-full h-auto">
            <motion.div
              ref={laptopRef}
              initial={{ opacity: 0, x: 20 }}
              animate={inView.laptop ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 1,
                ease: "easeInOut",
                staggerChildren: 0.2,
              }}
            >
              <img loading="lazy" src={ImageLaptop} alt="Image" />
            </motion.div>
          </figure>

          {/* image-tablet */}
          <figure className="absolute max-w-full phone:left-[50%]">
            <motion.div
              ref={tabletRef}
              initial={{ opacity: 0, x: -100 }}
              animate={inView.laptop ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                staggerChildren: 0.2,
              }}
            >
              <img loading="lazy" src={ImageTablet} alt="Image" />
            </motion.div>
          </figure>

          {/* image-phone */}
          <figure
            className="absolute max-w-full h-auto phone:left-[77%] phone:top-[49%] tablet:top-[50%] 
              laptop:top-[49%] desktop:top-[48%] min-[1300px]:top-[49%]"
          >
            <motion.div
              ref={phoneRef}
              initial={{ opacity: 0, x: -100 }}
              animate={inView.phone ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 2,
                ease: "easeInOut",
                staggerChildren: 0.2,
              }}
            >
              <img loading="lazy" src={ImagePhone} alt="Image" />
            </motion.div>
          </figure>
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
