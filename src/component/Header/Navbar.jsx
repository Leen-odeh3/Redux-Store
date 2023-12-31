import { Link } from "react-router-dom"
import './Header.css'


// eslint-disable-next-line react/prop-types
const Navbar = ({toggle,settoggle}) => {
  return (
    <nav  className="navbar" style={{ right: toggle && "0" }}>
      <div className="navbar-close-icon">
        <i className="bi bi-x-lg" onClick={()=> settoggle(!toggle)} ></i>
      </div>
      <ul className="navbar-links" >
        <Link to="/" onClick={()=> settoggle(!toggle)} className="navbar-link">
          الصفحه الرئیسیه
        </Link>
        <Link to="/products" onClick={()=> settoggle(!toggle)} className="navbar-link">
          الإلكترونيات و الموبايلات
        </Link>
        <li className="navbar-link" onClick={()=> settoggle(!toggle)}>
          المنزل و المطبخ
        </li>
        <li className="navbar-link" onClick={()=> settoggle(!toggle)}>
          رجاليه
        </li>
        <li className="navbar-link" onClick={()=> settoggle(!toggle)}>
          نسائیه
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;