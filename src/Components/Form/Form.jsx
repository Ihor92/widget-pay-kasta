import React from 'react';
import ReactTooltip from 'react-tooltip';
import MaskedInput from 'react-text-mask';
import { InputError, SuccessfulPay } from '../HelperComponents';
import help from '../../images/question.svg'
import {
  tooltipMessages,
  descripForInputs,
  placeholdDescription,
} from '../HelperMessages';
import './Form.css';

const Form = (props) => {
  const {
    buttonIsDisabled,
    errors,
    fields,
    timer,
    showSuccessfulPayment,
    sumToPay,
    handleSubmit,
    handleChange,
  } = props;

  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;

  const { cardOwnerTooltip, cvvTooltip, rememberCard } = tooltipMessages;
  const {
    descripNumberCard,
    descripCardExpiry,
    descripCardOwner,
    descripCvv,
    descripRemember,
    descripPay,
    descripTimer,
  } = descripForInputs;
  
  const {
    placeholdNumberCard,
    placeholdCardExpiry,
    placeholdCardOwner,
    placeholdCvv,
  } = placeholdDescription;

  const { cardNumber, cardExpiry, cardOwner, cvv } = fields;
  
  return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form__infoCard">
            <div className="form__input-numberCard">
              <label className="form__label" htmlFor="number-card">{descripNumberCard}</label>
              <MaskedInput
                mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                keepCharPositions={true}
                id="number-card"
                placeholder={placeholdNumberCard}
                name="cardNumber"
                onChange={handleChange}
                value={cardNumber}
                autoComplete="off"
                className={"form-control form-control-sm " + (errors.cardNumber ? 'from__inputError' : '')}
              />
              <div className="from__wrap--inputError">
                {errors.cardNumber && (
                  <InputError
                    propsInputError={errors.cardNumber}
                  />
                )}
              </div>
            </div>

            <div className="form__input-cardExpiry">
              <label className="form__label" htmlFor="card-expiry">{ descripCardExpiry }</label>
              <MaskedInput
                mask={[/\d/, /\d/, ' ', '/', ' ', /\d/, /\d/]}
                keepCharPositions={true}
                id="card-expiry"
                placeholder={ placeholdCardExpiry }
                name="cardExpiry"
                onChange={handleChange}
                value={cardExpiry}
                autoComplete="off"
                className={"form-control form-control-sm " + (errors.cardExpiry ? 'from__inputError' : '')}
              />
              <div className="from__wrap--inputError">
                {errors.cardExpiry && (
                  <InputError
                    propsInputError={errors.cardExpiry}
                  />
                )}
              </div>
            </div>
          </div>
          
          <div className="form__infoCard">
            <div className="form__input-cardOwner">
              <label className="form__label" htmlFor="card-owner">{ descripCardOwner }</label>
              <img src={help} alt="Tooltip" data-tip={ cardOwnerTooltip }/>
              <ReactTooltip
                type="light"
                effect="solid"
                multiline={true}
                border={true}
                borderColor="#333"
              />
              <input
                id="card-owner"
                type="text"
                placeholder={ placeholdCardOwner }
                name="cardOwner"
                onChange={handleChange}
                value={cardOwner}
                autoComplete="on"
                className={"form-control form-control-sm "}
              />
              </div>

            <div className="form__input-cvv">
              <label className="form__label" htmlFor="cvv">{ descripCvv }</label>

              <img src={help} alt="Tooltip" data-tip={ cvvTooltip }/>
              <ReactTooltip
                type="light"
                effect="solid"
                multiline={true}
                border={true}
                borderColor="#333"
              />
              <input
                id="cvv"
                type="password"
                placeholder={ placeholdCvv }
                name="cvv"
                onChange={handleChange}
                value={cvv}
                autoComplete="off"
                maxLength="3"
                className={"form-control form-control-sm"}
              />
            </div>
          </div>
          
          <div className="form__payment">
            <div className="form__payment-wrap">
              <div className="form__checkbox">
                <input
                  id="remember"
                  type="checkbox"
                />
                <label className="form__label-checkbox" htmlFor="remember">{ descripRemember }</label>
                <img src={help} alt="Tooltip" data-tip={ rememberCard }/>
                <ReactTooltip
                  type="light"
                  effect="solid"
                  multiline={true}
                  border={true}
                  borderColor="#333"
                />
              </div>

              <button
                type="submit"
                className={"btn btn-danger " + (buttonIsDisabled === true ? 'form__button-isDisabled' : '' )}
              >
                {descripPay} {sumToPay}
              </button>
              <p className="form__timer">
                {descripTimer}00:0{minutes}:{seconds < 10 ? '0' + seconds : seconds}
              </p>
            </div>
          </div>
        </form>

        {showSuccessfulPayment && (
          <div className="from__successfulPayment">
            <SuccessfulPay />
          </div>
        )}
      </div>
    );
}

export default Form;