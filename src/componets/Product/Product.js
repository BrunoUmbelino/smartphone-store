import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  addToCart,
  toggleModal,
  setCurrentProduct,
} from "../../redux/storeSlice";

function Product(props) {
  const { id, title, img, price, inCart } = props.product;
  const dispatch = useDispatch();

  return (
    <ProductWrapper className="col-9 col-md-6 col-lg-3  my-3 mx-auto">
      <div className="card">
        <div className="img-container p-5">
          <Link to={{ pathname: "details", state: { props } }}>
            <img
              src={img}
              alt="product"
              className="card-img p-3"
              height="250"
              max-width="200"
              onClick={() => dispatch(setCurrentProduct(id))}
            />
          </Link>
          <button
            className="cart-btn"
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
          </button>
        </div>

        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="font-italic mb-0">
            <span className="nr-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.2s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
  }
  &:hover {
    .card {
      border: 0.04rem solid darkgray;
      box-shadow: 2px 2px 5px 0px darkgray;
    }
    .card-footer {
      background: lightgray;
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img {
    transition: all 0.5s linear;
  }

  .img-container:hover .card-img {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.4rem 0.8rem;
    background: var(--lightBlue);
    border: none;
    color: var(--manWhite);
    font-size: 1.2rem;
    border-radius: 0.3rem 0 0 0;
    transform: translate(100%);
    transition: all 0.2s ease-in;
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
    &:hover {
      color: white;
    }
  }
`;

export default Product;
