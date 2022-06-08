import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating/Rating";

const ProductScreen = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);
  return (
    <div className="container">
      {/* <h1>proudct</h1> */}
      <Link className="btn btn-light mb-3" to="/">
        Go Back!
      </Link>
      <div className="">
        <div className="row">
          <div className="col-6" key={product.name}>
            <img className="card-img-top" src={product.image} alt="..." />
          </div>
          <div className="col-3">
            <ul className="list-group list-group-flush">
              <li className="list-group-item  display-4">{product.name}</li>
              <li className="list-group-item">
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </li>
              <li className="list-group-item">Price: {product.price}</li>
              <li className="list-group-item">{product.description}</li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-group">
              <li className="list-group-item">Price: ${product.price}</li>
              <li className="list-group-item">
                Status: {product.countInStock ? "In Stock" : "Out Of Stock"}
              </li>
              <button className="btn btn-dark">ADD TO CART</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
