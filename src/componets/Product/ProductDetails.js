import React from "react";
import { Link } from "react-router-dom";
import { SecondaryButton } from "../General/Button";
import { addToCart, toggleModal } from "../../state/storeSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

function ProductDetails() {
  let { id, img, model, inCart, company, info, price, title } = useSelector(
    (state) => state.store.currentProduct
  );

  const dispatch = useDispatch();

  return (
    <ProductDetailsWrapper className="Detail container py-3">
      <div className="row">
        <div className="col-10 text-center my-5 mx-auto">
          <h1>{title}</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-10 col-md-6 mx-auto my-3 text-capitalize text-center">
          <img src={img} alt="product" className="img-fluid" width="300px" />
        </div>

        <div className="col-10 mx-auto col-md-6 my3 text-capitalize">
          <h3>Model: {model}</h3>
          <h4 className="text-upercase text-muted">brand: {company}</h4>
          <h4 className="my-3 text-muted">
            price:
            <span className="Detail__price mr-1"> $ {price}</span>
          </h4>
          <h6>
            <strong>Product description</strong> :
            <p className="Detail__info">{info}</p>
          </h6>

          <Link to="/">
            <SecondaryButton>Back to Products</SecondaryButton>
          </Link>

          <SecondaryButton
            disabled={inCart ? true : false}
            onClick={() => {
              dispatch(addToCart(id));
              dispatch(toggleModal());
            }}
          >
            {inCart ? (
              <p className="mb-0" disabled>
                In cart
              </p>
            ) : (
              <p className="mb-0">Add to Cart</p>
            )}
          </SecondaryButton>
        </div>
      </div>
    </ProductDetailsWrapper>
  );
}

const ProductDetailsWrapper = styled.div`
  min-height: 95vh;
  .Detail__price {
    font-size: "2rem";
    color: var(--red);
  }

  .Detail__info {
    color: #585757;
    letter-spacing: 0.5px;
  }
`;

export default ProductDetails;
