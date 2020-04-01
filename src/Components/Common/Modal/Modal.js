import React from 'react';
import Animation from '../Animation/Animation';
import FormContainer from '../../Form';
import { general } from '../../HelperMessages';
import logo from '../../../images/mk-logo.svg';

import './Modal.css';

const {sumToPay, newCard, typeCard, toPay } = general;

const Modal = ({ handleCloseModal, showModal, children }) => (
  <Animation timeout={200} show={showModal}>
  <div className="modal d-block" tabIndex="-1" role="dialog">
      <span className="modal-backdrop show" onClick={handleCloseModal} />
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="">

            <header className="modal-header ">
              <img src={logo} alt="Kasta" />

              <div className="modal__aboutPay">
                <p className="modal__toPay">{toPay}</p>
                <p className="modal__sumToPay">{sumToPay}</p>
              </div>
            </header>

            <div className="modal__form">
              <div className="modal__form--header">
                <div className="modal__form--circleIcon">
                  <div className="modal__form--smallIcon"></div>
                </div>
                <div className="modal__form--infoCard">
                  <p className="modal__form--newCard">{newCard}</p>
                  <p className="modal__form--typeCard">{typeCard}</p>
                </div>
              </div>
              
              <FormContainer
                handleCloseModal={handleCloseModal}
                sumToPay={sumToPay}
              />
            </div>
            
            <footer className="modal-footer">
              <img className="modal__logo-footer" src={logo} alt="Kasta pay" />
              <span className="modal__Logo-pay">Pay</span>
            </footer>
          </div>
        </div>

        <button
          type="button"
          className="close modal__closeButton"
          data-dismiss="modal"
          aria-label="Close"
          onClick={handleCloseModal}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </Animation>
);

export default Modal;
