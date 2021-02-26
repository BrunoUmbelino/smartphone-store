import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../App/Button";
import Title from "../App/Title";
import { addToCart } from "../../redux/storeSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductDetails() {
  let { id, img, model, inCart, company, info, price, title } = useSelector(
    (state) => state.store.currentProduct
  );

  const dispatch = useDispatch();

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-10 text-center my-5 mx-auto">
          <h1>{title}</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-10 col-md-6 mx-auto my3 text-capitalize text-center">
          <img src={img} alt="product" className="img-fluid" width="300px" />
        </div>

        <div className="col-10 mx-auto col-md-6 my3 text-capitalize">
          <h3>Model: {model}</h3>
          <h4 className="text-upercase text-muted">brand : {company}</h4>
          <h4 className="my-3">
            <strong>price</strong> :{" "}
            <span style={{ fontSize: "2rem", color: "tomato" }}>$ {price}</span>
          </h4>
          <h6 style={{ letterSpacing: "" }}>
            <strong>Product description</strong> :{" "}
            <p className="text-muted">{info}</p>
          </h6>

          <Link to="/">
            <ButtonContainer>Back to Products</ButtonContainer>
          </Link>

          <ButtonContainer
            disabled={inCart ? true : false}
            onClick={() => {
              dispatch(addToCart(id));
            }}
          >
            {inCart ? (
              <p className="mb-0" disabled>
                In cart
              </p>
            ) : (
              <p className="mb-0">Add to Cart</p>
            )}
          </ButtonContainer>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
