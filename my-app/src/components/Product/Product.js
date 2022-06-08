import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

const Product = ({ product }) => {
  return (
    <div>
      <div className="card my-3 p-3 rounded" style={{ width: "18rem" }}>
        <Link to={`/api/products/${product._id}`}>
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ textDecoration: "none" }}>
              {product.name}
            </h5>
            <p className="card-text my-3">
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </p>
            <h3 className="card-title">${product.price}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
