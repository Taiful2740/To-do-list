import banner from "../../assets/banner.svg";
const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <div className="w-1/2 mr-6">
          <img
            src={banner}
            className="max-w-full rounded-lg shadow-2xl shadow-[#e363ff]"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold px-6">Easy To-do List</h1>
          <p className="p-6">
            Streamline tasks effortlessly with our intuitive to-do list website,
            offering organization, prioritization, and seamless collaboration
            for enhanced productivity.
          </p>
          <button className="btn bg-[#e363ff] text-white ml-6 hover:bg-[#e363ff] hover:shadow-2xl hover:shadow-[#e363ff]">
            Let’s Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
