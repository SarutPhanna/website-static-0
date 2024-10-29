import ImgProject1 from "../assets/Project-1.png";
import ImgProject2 from "../assets/Project-2.png";
import ImgProject3 from "../assets/Project-3.png";

const Project = () => {
  return (
    // -Box
    <div className="bg-[#3b3f46] p-5 phone:p-5 tablet:p-10 laptop:p-14 desktop:p-24">
      {/* --Box */}
      <div className="break-words">
        {/* ---Box */}
        <div className="text-center mb-10 text-white laptop:px-72">
          <h1 className="mb-3 font-medium phone:text-2xl tablet:text-3xl laptop:text-4xl desktop:text-4xl">
            Our template examples
          </h1>
          <p>
            You can use them as mockups for your website design. Of course, we
            don't charge any fees or royalties and we have a huge selection of
            our web templates for you to use in your projects.
          </p>
        </div>
        {/* ---Box */}
        <div className="gap-5 phone:grid phone:grid-cols-1 md:grid md:grid-cols-3">
          <img className="h-auto" src={ImgProject1} alt="Image" />
          <img className="h-auto" src={ImgProject2} alt="Image" />
          <img className="h-auto" src={ImgProject3} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default Project;
