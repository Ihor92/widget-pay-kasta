import React from 'react';
import Animation from '../Animation/Animation';
import FormContainer from '../../Form';
import logo from '../../../images/mk-logo.svg';


import './Modal.css';

const sumToPay = '123 284 грн';
const newCard = 'Нова карта';
const typeCard = 'Visa, Mastercard';

const Modal = ({ handleCloseModal, showModal, children }) => (
  <Animation timeout={200} show={showModal}>
  <div className="modal d-block" tabIndex="-1" role="dialog">
      <span className="modal-backdrop show" onClick={handleCloseModal} />
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="">

            <div className="modal-header ">
              <img src={logo} alt="Логотип" />

              <div className="aboutPay">
                <p className="toPay">До сплати</p>
                <p className="sumToPay">{sumToPay}</p>
              </div>
            </div>

            <div className="modalForm">
              <div className="modalForm--header">
                <div className="circleIcon">
                  <div className="circleSmallIcon"></div>
                </div>
                <div className="infoCard--text">
                  <p className="newCard">{newCard}</p>
                  <p className="typeCard">{typeCard}</p>
                </div>
              </div>
              
              <FormContainer
                handleCloseModal={handleCloseModal}
                sumToPay={sumToPay}
              />
            </div>
            
            <div className="modal-footer">
              <img className="footerLogo" src={logo} alt="Логотип" />
              <span className="footerLogoPay">Pay</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="close closeButton"
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
