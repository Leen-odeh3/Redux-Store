import "./Header.css";

// eslint-disable-next-line react/prop-types
const TopHeader = ({settoggle}) => {
  return (
    <div className="top-header">
      <div className="top-header-menu">
        <i className="bi bi-list" onClick={() => settoggle(true)}></i>
      </div>
      <div className="top-header-logo">
        <i className="bi bi-basket2"></i>
        نون
      </div>
      <div className="top-header-text">اهلا و سهلا بكم</div>
      <div className="top-header-phone">
        123-456-789
        <i className="bi bi-telephone"></i>
      </div>
    </div>
  );
};

export default TopHeader;
