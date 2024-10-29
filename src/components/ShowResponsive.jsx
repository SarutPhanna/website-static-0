import ImageLaptop from "../assets/Image_Laptop.png";
import ImageTablet from "../assets/Image_Tablet.png";
import ImagePhone from "../assets/Image_Phone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const ShowResponsive = () => {
  const ref = useRef(null); // สร้างการอ้างอิงสำหรับองค์ประกอบที่เราจะใช้สังเกตการณ์
  const [inView, setView] = useState(false); // สร้าง state เพื่อเก็บข้อมูลว่าองค์ประกอบอยู่ในมุมมองหรือไม่

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setView(entry.isIntersecting); // หากองค์ประกอบเข้าสู่มุมมองจะตั้งค่า inView เป็น true
      },
      { threshold: 0.1 } // กำหนดให้เริ่มตรวจจับเมื่อองค์ประกอบเข้ามาในมุมมองอย่างน้อย 10%
    );
    if (ref.current) {
      observer.observe(ref.current); // สังเกตการณ์องค์ประกอบที่เราอ้างอิงไว้
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // หยุดการสังเกตเมื่อองค์ประกอบถูก unmount
      }
    };
  });

  return (
    // -Box
    <div className="phone:p-5 tablet:p-10 laptop:p-14 desktop:p-20">
      {/* --Box */}
      <div className="break-words md:grid md:grid-cols-2 md:gap-8">
        {/* ---Box */}
        <div
          className="relative flex justify-center items-center 
          phone:h-[40vh] tablet:h-[40vh] desktop:h-[65vh] min-[500px]:h-[55vh]"
        >
          {/* Image-Laptop */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1,
              ease: "easeInOut",
              staggerChildren: 0.2,
            }}
            className="absolute max-w-full h-auto"
          >
            <img className="" src={ImageLaptop} alt="Image" />
          </motion.div>

          {/* Image-Tablet */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              staggerChildren: 0.2,
            }}
            className="absolute max-w-full phone:left-[50%]"
          >
            <img src={ImageTablet} alt="Image" />
          </motion.div>

          {/* Image-Phone */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 2,
              ease: "easeInOut",
              staggerChildren: 0.2,
            }}
            className="absolute max-w-full h-auto phone:left-[77%] phone:top-[51%] tablet:top-[50%] 
              laptop:top-[49%] desktop:top-[48%] min-[1300px]:top-[49%]"
          >
            <img src={ImagePhone} alt="Image" />
          </motion.div>
        </div>
        {/* ---Box */}
        <div className="md:flex md:flex-col md:justify-center md:p-5">
          <h1 className="font-medium phone:text-xl tablet:text-2xl laptop:text-3xl desktop:text-4xl">
            Responsive Design
          </h1>
          <div className="mt-5 mb-5">
            <h1 className="mb-3 font-medium text-lg">
              <FontAwesomeIcon className="mr-3 text-3xl" icon={faThumbsUp} />
              Ready to support all screens
            </h1>
            <p className="text-gray-600">
              No matter how your website is designed, you don't have to worry
              because we design websites to be responsive to all screen sizes.
            </p>
          </div>
          <div>
            <h1 className="mb-3 font-medium text-lg">
              <FontAwesomeIcon className="mr-3 text-3xl" icon={faPalette} />
              Design your style
            </h1>
            <p className="text-gray-600">
              You can decorate it yourself or choose our templates as you wish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowResponsive;
