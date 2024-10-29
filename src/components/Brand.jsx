import ImgBrand1 from "../assets/Img-Brand-1.png";
import ImgBrand2 from "../assets/Img-Brand-2.png";
import ImgBrand3 from "../assets/Img-Brand-3.png";
import { motion } from "framer-motion";

const Brand = () => {
  return (
    // -Box
    <div className="phone:p-5 tablet:p-10 laptop:p-14 desktop:p-24">
      {/* --Box */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          duration: 4,
          damping: 30,
        }}
        className="text-center break-words gap-5 md:grid md:grid-cols-3"
      >
        {/* ---Box */}
        <div className="mb-5">
          <div className="relative group">
            <img
              className="object-cover w-[100%] h-auto rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              src={ImgBrand1}
              alt="Image"
            />
            <div className="absolute rounded-xl inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <button className="bg-sky-500 px-7 py-2 rounded font-semibold text-white hover:bg-black hover:text-white duration-500">
                  PREVIEW
                </button>
              </a>
            </div>
          </div>
          <div className="phone:px-10 tablet:p-0 laptop:px-10">
            <h1 className="mt-5 mb-3 font-medium phone:text-xl tablet:text-2xl">
              Business
            </h1>
            <p className="text-gray-600 w">
              Promote your products with a custom website that boosts visibility
              and drives sales. Elevate your brand today
            </p>
          </div>
        </div>
        {/* ---Box */}
        <div className="mb-5">
          <div className="relative group">
            <img
              className="object-cover w-[100%] h-auto rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              src={ImgBrand2}
              alt="Image"
            />
            <div className="absolute rounded-xl inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <button className="bg-sky-500 px-7 py-2 rounded font-semibold text-white hover:bg-black hover:text-white duration-500">
                  PREVIEW
                </button>
              </a>
            </div>
          </div>
          <div className="phone:px-10 tablet:p-0 laptop:px-10">
            <h1 className="mt-5 mb-3 font-medium phone:text-xl tablet:text-2xl">
              Elevate Your Brand Online
            </h1>
            <p className="text-gray-600">
              Boost your brand with a custom website that stands out and drives
              results. Make your online presence unforgettable.
            </p>
          </div>
        </div>
        {/* ---Box */}
        <div>
          <div className="relative group">
            <img
              className="object-cover w-[100%] h-auto rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              src={ImgBrand3}
              alt="Image"
            />
            <div className="absolute rounded-xl inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <button className="bg-sky-500 px-7 py-2 rounded font-semibold text-white hover:bg-black hover:text-white duration-500">
                  PREVIEW
                </button>
              </a>
            </div>
          </div>
          <div className="phone:px-10 tablet:p-0 laptop:px-10">
            <h1 className="mt-5 mb-3 font-medium phone:text-xl tablet:text-2xl">
              Landing Page
            </h1>
            <p className="text-gray-600">
              A great landing page captures attention and converts visitors. Let
              us build one that drives results for your business
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Brand;
