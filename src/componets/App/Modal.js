import React from "react";
import { ButtonContainer } from "./Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/storeSlice";

function Modal() {
  const modalOpen = useSelector((state) => state.store.modalOpen);
  const product = useSelector((state) => state.store.currentProduct);
  const dispatch = useDispatch();
  return (
    <div>
      {modalOpen ? (
        <ModalContainer>
          <div className="row">
            <div
              id="modal"
              className="col-8 col-md-6 col-lg-4 mx-auto text-center text-capitalize p-4"
            >
              <h5>item added to the cart</h5>
              <img src={product.img} alt="product" className="img-fluid p-5" />
              <h5>{product.title}</h5>
              <h5 className="text-muted">price : ${product.price}</h5>
              <Link to="/">
                <ButtonContainer onClick={() => dispatch(toggleModal())}>
                  Continue Shopping
                </ButtonContainer>
              </Link>
              <Link to="/cart">
                <ButtonContainer onClick={() => dispatch(toggleModal())}>
                  Go to Cart
                </ButtonContainer>
              </Link>
            </div>
          </div>
        </ModalContainer>
      ) : null}
    </div>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: white;
  }
`;

export default Modal;
