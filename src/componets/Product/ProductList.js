import React from "react";
import Product from "./Product";
import Title from "../General/Title";
import { useSelector } from "react-redux";

function ProductList() {
  const products = useSelector((state) => state.store.products);

  return (
    <React.Fragment>
      <div className="container py-5">
        <Title>Products</Title>
        <div className="row justify-content-center mt-3">
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductList;
