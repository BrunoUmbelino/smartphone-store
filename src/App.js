import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Default from "./componets/General/Default";
import Navbar from "./componets/General/Navbar";
import Cart from "./componets/Cart/Cart";
import ProductDetails from "./componets/Product/ProductDetails";
import ProductList from "./componets/Product/ProductList";
import Modal from "./componets/Product/ProductModal";
import Footer from "./componets/General/Footer";

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
      <Footer />
      <Modal />
    </React.Fragment>
  );
}

export default App;
