import { Link } from "react-router-dom";

const MiddleHeader = () => {
  return (
    <div className="flex justify-between items-center  px-6 h-2/5	 bg-slate-700	">
      <div className=" h-11	 w-3/5	">
        <input
          type="search"
          placeholder="ماذا ترید؟"
          className="w-full	 h-full pr-4	"
        />
        <button className="text-white	">ابحث</button>
      </div>
      <Link to="/cart" className="text-white">
        سله التسوق
        <i className="bi bi-cart3  text-xl	 p-1"></i>
      </Link>
    </div>
  );
};

export default MiddleHeader;
