import React from "react";
import { useDispatch } from "react-redux";
import "../../../App.scss";
import {
  incrementProduct,
  decrementProduct,
  removeItem,
} from "../../../redux/storeSlice";

function CartItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={product.img}
          alt="product"
          style={{ width: "5rem" }}
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span> {product.title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span> {product.price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center align-items-center">
          <span
            className="btn btn-black mx-1"
            onClick={() => dispatch(incrementProduct(product.id))}
          >
            +
          </span>
          <span className="btn btn-black mx-1">{product.count}</span>
          <span
            className="btn btn-black mx-1"
            onClick={() => dispatch(decrementProduct(product.id))}
          >
            -
          </span>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <div
          className="cart-icon"
          onClick={() => dispatch(removeItem(product.id))}
        >
          <i className="fas fa-trash"></i>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <strong>item total : $ {product.total} </strong>
      </div>
    </div>
  );
}

export default CartItem;
