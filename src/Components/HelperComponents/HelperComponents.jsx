import React from 'react';
import successful from '../../images/successful-payment.svg';
import { general } from '../HelperMessages/HelperMessages';

export function InputError(props) {
  return (
    <span className="showError">
      {props.propsInputError}
    </span>
  )
}

export function SuccessfulPay() {
  return (
    <div className="successfulPaymentPopup">
      <p className="successfulPayment--text">
        {general.successfulPay}
      </p>
      <img className="successfulIcon" src={successful} alt="Icon" />
    </div>
  )
};
