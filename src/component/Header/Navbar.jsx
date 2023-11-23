import { Link } from "react-router-dom"
import './Header.css'


const Navbar = () => {
  return (
    <nav  className="navbar">
      <div className="navbar-close-icon">
        <i className="bi bi-x-lg"></i>
      </div>
      <ul className="navbar-links">
        <Link to="/"  className="navbar-link">
          الصفحه الرئیسیه
        </Link>
        <Link to="/products"  className="navbar-link">
          الإلكترونيات و الموبايلات
        </Link>
        <li className="navbar-link">
          المنزل و المطبخ
        </li>
        <li className="navbar-link">
          رجاليه
        </li>
        <li className="navbar-link">
          نسائیه
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;