import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Create an account!</h1>
          </div>
          <div className="card flex-shrink-0 w-96 mt-4 max-w-sm shadow-2xl shadow-[#e363ff] bg-base-100">
            <form>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="Your name"
                    name="name"
                    required
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#e363ff] text-white">
                    Register
                  </button>
                </div>
              </div>
            </form>
            <p className="text-center mb-6">
              Already have account? Please{" "}
              <Link to="/login" className="font-bold text-[#e363ff]">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
