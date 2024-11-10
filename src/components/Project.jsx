import { data_project } from "../../content/project";
import ImgProject1 from "../assets/Project-1.png";
import ImgProject2 from "../assets/Project-2.png";
import ImgProject3 from "../assets/Project-3.png";

const Project = () => {
  return (
    // -box main
    <section className="bg-[#3b3f46] p-5 break-words phone:p-5 tablet:p-10 laptop:p-14 desktop:p-24">
      {/* --box head and title */}
      <div className="text-center mb-10 text-white laptop:px-72">
        <h1 className="mb-3 font-medium phone:text-2xl tablet:text-3xl laptop:text-4xl desktop:text-4xl">
          {data_project.head}
        </h1>
        <p className="text-gray-300">{data_project.title}</p>
      </div>
      {/* --box images  */}
      <section className="gap-5 phone:grid phone:grid-cols-1 md:grid md:grid-cols-3">
        <figure className="overflow-hidden">
          <img
            loading="lazy"
            className="h-auto w-full transform transition-transform duration-300 hover:scale-105"
            src={ImgProject1}
            alt="Image"
          />
        </figure>
        <figure className="overflow-hidden">
          <img
            loading="lazy"
            className="h-auto w-full transform transition-transform duration-300 hover:scale-105"
            src={ImgProject2}
            alt="Image"
          />
        </figure>
        <figure className="overflow-hidden">
          <img
            loading="lazy"
            className="h-auto w-full transform transition-transform duration-300 hover:scale-105"
            src={ImgProject3}
            alt="Image"
          />
        </figure>
      </section>
    </section>
  );
};

export default Project;
