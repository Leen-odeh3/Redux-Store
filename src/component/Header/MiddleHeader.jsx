import { Link } from "react-router-dom";

const MiddleHeader = () => {
  return (
    <div className=" flex justify-between items-center  px-6 h-2/5 bg-slate-700">
      <div className="h-11 md:w-3/6 	 rounded-r-2xl relative sm:w-6/12	 ">
        <input
          type="search"
          placeholder="ماذا ترید؟"
          className="w-full h-full pr-4"
        />
        <button className="text-white absolute bg-green-600 w-14 rounded-l-md h-full">
          ابحث
        </button>
      </div>
      <Link to="/cart" className="text-white ">
        سله التسوق
        <i className="bi bi-cart3 text-xl p-1"></i>
      </Link>
    </div>
  );
};

export default MiddleHeader;
