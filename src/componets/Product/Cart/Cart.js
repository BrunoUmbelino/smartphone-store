import React from "react";

import CartCollums from "./CartCollumns";
import Title from "../../App/Title";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import { useSelector } from "react-redux";
import CartTotalValue from "./CartTotalValue";

function Cart(props) {
  const cart = useSelector((state) => state.store.cart);
  const cartEmpty = cart.length <= 0;

  return (
    <div>
      {cartEmpty ? (
        <EmptyCart />
      ) : (
        <React.Fragment>
          <Title>Cart</Title>
          <CartCollums />
          <CartList cart={cart} />
          <CartTotalValue cart={cart} history={props.history} />
        </React.Fragment>
      )}
    </div>
  );
}

export default Cart;
