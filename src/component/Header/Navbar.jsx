import { NavLink,Link } from "react-router-dom";

const Navbar = () => {
  const navs = [
    " الصفحه الرئيسيه",
    "الالكترونيات والموبايلات ",
    "المنزل والمطبخ ",
    "رجاليه",
    "نسائيه",
  ];
  return (
    <div className="flex  justify-between items-center px-6 py-3	 bg-slate-700">
      <div className="text-white w-3/6">
        {navs.map((e) => {
          return (
            <NavLink key={e.id} className="p-3 hover:text-yellow-400 " to={`/${e.split(" ")[0]}`}>
              {e}{" "}
            </NavLink>
          );
        })}
      </div>
      <Link className=" text-yellow-400 	">
        <b className="text-base	"> تسجيل الدخول</b>
        <i className="bi bi-person-fill-lock p-2 	text-2xl"></i>
      </Link>
    </div>
  );
};

export default Navbar;
