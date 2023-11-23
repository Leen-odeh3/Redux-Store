import './Banner.css'
const HeaderBanner = () => {
  return (
    <div className="header-banner" style={{width:"100%", display:"flex" 
    ,justifyContent:"space-between" ,alignItems:"flex-start", padding:"10px 20px"}}>
      <img
        className="header-banner-img"
        src="/assets/banners/house.png"
        alt=""
      />
      <img
        className="header-banner-img"
        src="/assets/banners/shoes.png"
        alt=""
      />
    </div>
  );
};

export default HeaderBanner;

