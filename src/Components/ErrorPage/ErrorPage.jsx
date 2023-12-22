import { Link } from "react-router-dom";
import error from "../../assets/404.gif";

const ErrorPage = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-10">Sorry!</h1>
      <h2 className="text-center text-2xl font-bold">
        This page is not found.
      </h2>

      <div className="flex justify-center items-center mx-auto w-[650px] ">
        <img src={error} alt="" />
      </div>
      <div className="flex justify-center mt-3 ">
        <Link to="/">
          <button className="btn bg-black text-white">Go to homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
