import { Link } from "react-router-dom";
import banner from "../../assets/banner.svg";
const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2 mr-6">
          <img
            src={banner}
            className=" lg:max-w-full lg:rounded-lg shadow-2xl shadow-[#e363ff]"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-4xl text-center mt-6 font-bold lg:text-5xl lg:font-bold lg:px-6">
            Easy To-do List
          </h1>
          <p className="text-center p-6">
            Streamline tasks effortlessly with our intuitive to-do list website,
            offering organization, prioritization, and seamless collaboration
            for enhanced productivity.
          </p>
          <div className="flex items-center justify-center">
            <Link
              to="/dashboard"
              className="btn bg-[#e363ff] text-white ml-6 hover:bg-[#e363ff] hover:shadow-2xl hover:shadow-[#e363ff]"
            >
              Let’s Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
