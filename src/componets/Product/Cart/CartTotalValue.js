import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../../../redux/storeSlice";
import Paypal from "./Paypal";

function CartTotalValue({ cart, history }) {
  const dispatch = useDispatch();
  const paymentFee = useSelector((state) => state.store.paymentFee);
  const subTotalValue = cart
    .map((product) => product.total)
    .reduce((totalCart, totalProduct) => totalCart + totalProduct);
  const totalValue = paymentFee + subTotalValue;

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <button
            type="button"
            className="btn btn-outline-danger text-uppercase mb-3 px-5"
            onClick={() => dispatch(clearCart())}
          >
            clear cart
          </button>

          <h5>
            <span className="text-title">subtotal: </span>
            <strong>$ {subTotalValue}</strong>
          </h5>
          <h5>
            <span className="text-title">tax: </span>
            <strong>$ {paymentFee}</strong>
          </h5>
          <h4>
            <span className="text-title">total value: </span>
            <strong>$ {totalValue}</strong>
          </h4>
          <Paypal
            totalValue={totalValue}
            clearCart={clearCart}
            history={history}
          />
        </div>
      </div>
    </div>
  );
}

export default CartTotalValue;
