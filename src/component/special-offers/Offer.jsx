import Rating from "../rating/Rating";
import {Link} from "react-router-dom";

const Offer = () => {




  return (
    <div className="offer">
      <div className="offer-image-wrapper">
        <img
          src={imageSrc}
          alt={title}
          className="offer-image"
        />
      </div>
      <div className="offer-info">
        <h5 className="offer-title">{title}</h5>
        <Rating rating={rating} reviews={reviews} />
        <div className="offer-price">
          <b className="offer-price-item">${price}</b>
          <b className="offer-final-price-item">
            ${calculatedDiscount}
          </b>
        </div>
         <Link to={`/special-offers/${id}`} className="offer-see-more">
          شاهد المزید ...
         </Link>
      </div>
      <div className="offer-discount"> خصم {discount}% </div>
    </div>
  );
};

export default Offer;