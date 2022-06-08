import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../components/Product/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-center">Latest Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-12 col-md-6 col-xl-3">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
