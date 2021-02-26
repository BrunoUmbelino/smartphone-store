import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import Default from "./componets/App/Default";
import Navbar from "./componets/App/Navbar";
import Cart from "./componets/Product/Cart/Cart";
import ProductDetails from "./componets/Product/ProductDetails";
import ProductList from "./componets/Product/ProductList";
import Modal from "./componets/App/Modal";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={ProductDetails} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
