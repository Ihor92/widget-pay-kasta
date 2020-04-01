import React from 'react';
import successful from '../images/successful-payment.svg';
import { general } from './HelperMessages';

export function InputError(props) {
  return (
    <span className="form__showError">
      {props.propsInputError}
    </span>
  )
}

export function SuccessfulPay() {
  return (
    <div className="form__successfulPayment-popup">
      <p className="form__successfulPayment-text">
        {general.successfulPay}
      </p>
      <img className="form__successful-icon" src={successful} alt="Icon" />
    </div>
  )
};
