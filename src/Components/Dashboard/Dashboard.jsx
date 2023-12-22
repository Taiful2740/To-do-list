import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex">
        <div className="w-64 min-h-screen bg-[#e363ff]">
          <ul>
            <li className="mt-7 ml-5">
              <NavLink
                className="text-xl font-bold hover:bg-[#e363ff] hover:text-white"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="mt-2 ml-5">
              <NavLink
                className="text-xl font-bold hover:bg-[#e363ff] hover:text-white"
                to="/newtask"
              >
                New Task
              </NavLink>
            </li>
            <li className="mt-2 ml-5">
              <NavLink
                className="text-xl font-bold hover:bg-[#e363ff] hover:text-white"
                to="/previoustask"
              >
                Previous Task
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 bg-slate-200">
          <h1 className="text-4xl font-bold text-center mt-5">
            Welcome to Dashboard
          </h1>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
