import React from 'react';
import successful from '../Form/successful-payment.svg';
import { general } from '../HelperMessages/HelperMessages';

export function ShowError(props) {
  return (
    <span className="showError">
      {props.propsShowError}
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
