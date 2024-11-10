import ImgBran1 from "../assets/Img-Brand-1.png";
import ImgBrand2 from "../assets/Img-Brand-2.png";
import ImgBrand3 from "../assets/Img-Brand-3.png";
import { useMemo } from "react";
import { data_brand } from "../../content/brand";
import { data_link_brand } from "../../content/brand";
import { motion } from "framer-motion";

const Brand = () => {
  // memo
  const images = useMemo(() => [ImgBran1, ImgBrand2, ImgBrand3], []);
  return (
    // -box main
    <section className="phone:p-5 tablet:p-10 laptop:p-14 desktop:p-24">
      {/* --box control layout */}
      <section className="text-center break-words gap-5 md:grid md:grid-cols-3">
        {/* ---box */}
        {data_brand.map((item, index) => (
          <motion.div
            key={index}
            layout
            style={{ willChange: "transform, opacity" }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              delay: index * 1,
              duration: 1.5,
            }}
            className="mb-5"
          >
            <div className="relative group">
              {/* image */}
              <figure>
                <img
                  loading="lazy"
                  className="object-cover w-[100%] h-auto rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                  src={images[index]} // use memo
                  alt={`Image ${index + 1}`}
                />
              </figure>
              {/* hover overlay */}
              <div className="absolute rounded-xl inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center duration-700 cursor-pointer will-change-transform-opacity">
                <a
                  href={data_link_brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-sky-500 px-7 py-2 rounded font-semibold text-white hover:bg-sky-700 duration-500">
                    {data_link_brand.link}
                  </button>
                </a>
              </div>
            </div>
            {/* header and title*/}
            <div className="phone:px-10 tablet:p-0 laptop:px-10">
              <h1 className="mt-5 mb-3 font-medium phone:text-xl tablet:text-2xl">
                {item.head}
              </h1>
              <p className="text-gray-600">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </section>
  );
};

export default Brand;
