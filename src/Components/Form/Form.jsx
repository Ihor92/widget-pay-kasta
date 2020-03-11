import React from 'react';
import Input from '../Input/Input';
import ReactTooltip from 'react-tooltip'
import { ShowError, SuccessfulPay } from '../HelperComponents/HelperComponents';
import help from './question.svg'
import {
  tooltipMessages,
  descriptionForInputs,
  placeholdDescription,
  showErrorMessages,
  general,
} from '../HelperMessages/HelperMessages';
import './Form.css';

const Form = (props) => {
  const {
    buttonIsDisabled,
    showError,
    timer,
    showSuccessfulPayment,
    sumToPay,
    checkDataLength,
    handleChange,
    cardNumber,
    cardExpiry,
    cardOwner,
    cvv
  } = props;

  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;

  const { cardOwnerTooltip, cvvTooltip, rememberCard } = tooltipMessages;
  const {
    descriptionNumberCard,
    descriptionCardExpiry,
    descriptionCardOwner,
    descriptionCvv,
    descriptionRemember,
    descriptionPay,
    descriptionTimer,
  } = descriptionForInputs;
  
  const {
    placeholdNumberCard,
    placeholdCardExpiry,
    placeholdCardOwner,
    placeholdCvv,
  } = placeholdDescription;

  const { invalidCard, wrongDate, enterName, checkCvv, } = showErrorMessages;

    return (
      <div>
        <form onSubmit={checkDataLength}>
          <div className="infoCard">
            <div className="inputNumberCard">
              <label className="label" htmlFor="number-card">{descriptionNumberCard}</label>
              <Input
                id="number-card"
                type="number"
                placeholder={ placeholdNumberCard }
                name="cardNumber"
                onChange={handleChange}
                value={cardNumber}
                autoComplete="off"
                className="infoCard--number "
              />
              <div className="wrapShowError">
                {showError && (
                  <ShowError
                    propsShowError={invalidCard}
                  />
                )}
              </div>
             
            </div>

            <div className="inputCardExpiry">
              <label className="label" htmlFor="card-expiry">{ descriptionCardExpiry }</label>
              <Input
                id="card-expiry"
                type="number"
                placeholder={ placeholdCardExpiry }
                name="cardExpiry"
                onChange={handleChange}
                value={cardExpiry}
                autoComplete="off"
              />
              <div className="wrapShowError">
                {showError && (
                  <ShowError
                    propsShowError={wrongDate}
                  />
                )}
              </div>
            </div>
          </div>

          {showSuccessfulPayment && (
            <div className="successfulPayment">
              <SuccessfulPay />
            </div>
          )}
          
          <div className="infoCard">
            <div className="inputCardOwner">
              <label className="label" htmlFor="card-owner">{ descriptionCardOwner }</label>
              <img src={help} alt="Tooltip" data-tip={ cardOwnerTooltip }/>
              <ReactTooltip
                type="light"
                effect="solid"
                multiline={true}
                border={true}
                borderColor="#333"
              />
              <Input
                id="card-owner"
                type="text"
                placeholder={ placeholdCardOwner }
                name="cardOwner"
                onChange={handleChange}
                value={cardOwner}
                autoComplete="on"
              />
              <div className="wrapShowError">
                {showError && (
                  <ShowError
                    propsShowError={ enterName }
                  />
                )}
              </div>
            </div>

            <div className="inputCvv">
              <label className="label" htmlFor="cvv">{ descriptionCvv }</label>

              <img src={help} alt="Tooltip" data-tip={ cvvTooltip }/>
              <ReactTooltip
                type="light"
                effect="solid"
                multiline={true}
                border={true}
                borderColor="#333"
              />
              <Input
                id="cvv"
                type="password"
                placeholder={ placeholdCvv }
                name="cvv"
                onChange={handleChange}
                value={cvv}
                autoComplete="off"
              />
              <div className="wrapShowError">
                {showError && (
                  <ShowError
                    propsShowError={checkCvv}
                  />
                )}
              </div>
            </div>
          </div>
          
          <div className="payment">
            <div className="paymentWrap">
              <div className="paymentCheckbox">
                <input id="remember" type="checkbox" />
                <label className="labelCheckbox" htmlFor="remember">{ descriptionRemember }</label>
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
              >{ descriptionPay } {sumToPay}</button>
              <p className="timer">{ descriptionTimer }00:0{minutes}:{seconds < 10 ? '0' + seconds : seconds}</p>
            </div>
          </div>
        </form>
      </div>
    );
}

export default Form;