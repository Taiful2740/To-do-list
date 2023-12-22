import logo from "../../assets/list.png";
const ContactUs = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-center items-center mt-20 mb-16">
        <div className="card card-compact bg-base-100 shadow-2xl shadow-[#e363ff]">
          <figure>
            <div className="flex justify-center ">
              <img className="w-48 h-48" src={logo} alt="" />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title  justify-center">
              2404 Redwood Ct, Auburn, WA 98092, USA
            </h2>
            <p className="text-center text-xl">(+1) 207 187 1989</p>
            <p className="text-center text-xl">taifulpersonal@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
