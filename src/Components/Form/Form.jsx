import React from 'react';
import ReactTooltip from 'react-tooltip';
import MaskedInput from 'react-text-mask';
import { InputError, SuccessfulPay } from '../HelperComponents/HelperComponents';
import help from '../../images/question.svg'
import {
  tooltipMessages,
  descripForInputs,
  placeholdDescription,
  showErrorMessages,
} from '../HelperMessages/HelperMessages';
import './Form.css';

const Form = (props) => {
  const {
    buttonIsDisabled,
    showError,
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

  const { invalidCard, wrongDate, enterName, checkCvv, } = showErrorMessages;
  const { showErrorCardNamber, showErrorCardExpiry, showErrorCardOwner, showErrorCvv } = showError;
  const { cardNumber, cardExpiry, cardOwner, cvv} = fields;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="infoCard">
            <div className="inputNumberCard">
              <label className="label" htmlFor="number-card">{descripNumberCard}</label>
              <MaskedInput
                mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                keepCharPositions={true}
                id="number-card"
                placeholder={placeholdNumberCard}
                name="cardNumber"
                onChange={handleChange}
                value={cardNumber}
                autoComplete="off"
                className={"infoCard--number form-control form-control-sm " + (showErrorCardNamber === true ? 'inputError' : '')}
              />
              <div className="wrapInputError">
                {showErrorCardNamber && (
                  <InputError
                    propsInputError={invalidCard}
                  />
                )}
              </div>
            </div>

            <div className="inputCardExpiry">
              <label className="label" htmlFor="card-expiry">{ descripCardExpiry }</label>
              <MaskedInput
                mask={[/\d/, /\d/, ' ', '/', ' ', /\d/, /\d/]}
                keepCharPositions={true}
                id="card-expiry"
                placeholder={ placeholdCardExpiry }
                name="cardExpiry"
                onChange={handleChange}
                value={cardExpiry}
                autoComplete="off"
                className={"form-control form-control-sm " + (showErrorCardExpiry === true ? 'inputError' : '')}
              />
              <div className="wrapInputError">
                {showErrorCardExpiry && (
                  <InputError
                    propsInputError={wrongDate}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="infoCard">
            <div className="inputCardOwner">
              <label className="label" htmlFor="card-owner">{ descripCardOwner }</label>
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
                className={"form-control form-control-sm " + (showErrorCardOwner === true ? 'inputError' : '')}
              />
              <div className="wrapInputError">
                {showErrorCardOwner && (
                  <InputError
                    propsInputError={ enterName }
                  />
                )}
              </div>
            </div>

            <div className="inputCvv">
              <label className="label" htmlFor="cvv">{ descripCvv }</label>

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
                className={"form-control form-control-sm " + (showErrorCvv === true ? 'inputError' : '')}
              />
              <div className="wrapInputError">
                {showErrorCvv && (
                  <InputError
                    propsInputError={checkCvv}
                  />
                )}
              </div>
            </div>
          </div>
          
          <div className="payment">
            <div className="paymentWrap">
              <div className="paymentCheckbox">
                <input
                  id="remember"
                  type="checkbox"
                />
                <label className="labelCheckbox" htmlFor="remember">{ descripRemember }</label>
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
                className={"btn btn-danger " + (buttonIsDisabled === true ? 'buttonIsDisabled ' : '' )}
              >
                {descripPay} {sumToPay}
              </button>
              <p className="timer">
                {descripTimer}00:0{minutes}:{seconds < 10 ? '0' + seconds : seconds}
              </p>
            </div>
          </div>
        </form>

        {showSuccessfulPayment && (
          <div className="successfulPayment">
            <SuccessfulPay />
          </div>
        )}
        
      </div>
    );
}

export default Form;