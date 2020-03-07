import React, { Component } from 'react';
import Input from '../Input/Input';
import { SuccessfulPay, InvalidCard, WrongDate, EnterName, CheckCvv } from '../HelperMessages/HelperMessages';
import './Form.css';

const validDataLength = {
  cardNumber: 16,
  cardExpiry: 4,
  cvv: 3,
  cardOwner: 40,
}

const findToday = new Date();
const findThisYear = findToday.getFullYear();
const findThisMonth = findToday.getMonth();
let lasNumbersYear = findThisYear.toString().substring(2);
let corectMonth = findThisMonth < 9 ? '0' + findThisMonth : findThisMonth;

export default class Form extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      cardExpiry: '',
      cardOwner: '',
      cvv: '',
      showError: false,
      buttonIsDisabled: true,
      incorrectDate: false,
      timer: 600,
      timeLeft: null,
      showSuccessfulPayment: false
    }
  }
  componentDidMount() {
    this.setTimerId(); 
  }

  componentWillUnmount() {
    this.clearTimerId();
  }

  clearTimerId = () => {
    clearInterval(this.timerStart);
  };

  setTimerId = () => {
    const { handleCloseModal } = this.props;
    this.timerStart = setInterval(() => {
      let timerLefet = this.state.timer - 1;
      if (timerLefet === 0) {
        clearInterval(this.timerStart);
        handleCloseModal() ;
      }
      this.setState({
        timer: timerLefet
      })
    }, 1000)
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (value.length <= validDataLength[name]) {
      this.setState({
        [name]: value,
      })
    }
    this.checkAllInputs();
  }

  checkAllInputs = () => {
    const { cardNumber, cardExpiry, cardOwner, cvv } = this.state;
    if (cardNumber !== '' && cardExpiry !== '' && cardOwner !== '' && cvv !== '') {
      this.setState({
        buttonIsDisabled: false,
      })
    }
  }

  checkDataLength = (event) => {
    const { cardExpiry, cvv, cardNumber, cardOwner } = this.state;
    if (
      cardNumber.length === validDataLength.cardNumber &&
      cardExpiry.length === validDataLength.cardExpiry && 
      cardOwner !== '' && 
      cvv.length === validDataLength.cvv) {
      
      if (corectMonth + lasNumbersYear <= cardExpiry) {
        this.handleSubmit();
      } else {
        this.setState({
          incorrectDate: true,
          cardExpiry: '',
          cvv: ''
        })
      }

      event.preventDefault();
      
    }  else {
      console.log("Невірне значеня");
      this.setState({
        showError: true,
        cvv: ''
      })
      event.preventDefault();
    }
  }

  handleSubmit = () => {
    const { handleCloseModal } = this.props;

    this.setState({
      showSuccessfulPayment: true
    })

    this.timerId = setTimeout(() => {
      handleCloseModal() ;
    }, 1000);
  }

  render() {
    const { buttonIsDisabled, showError, incorrectDate, timer, showSuccessfulPayment } = this.state;
    const { sumToPay } = this.props;
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;

    return (
      <div>
        <form onSubmit={this.checkDataLength}>
          <div className="infoCard">
            <div className="inputNumberCard">
              <label className="label" htmlFor="number-card">Номер карти</label>
              <Input
                id="number-card"
                type="number"
                placeholder="#### #### #### ####"
                name="cardNumber"
                onChange={this.handleChange}
                value={this.state.cardNumber}
                autoComplete="off"
                className="infoCard--number "
              />
              {showError && (<InvalidCard />)}
            </div>

            <div className="inputCardExpiry">
              <label className="label" htmlFor="card-expiry">Термін дії</label>
              <Input
                id="card-expiry"
                type="number"
                placeholder="ММ / РР"
                name="cardExpiry"
                onChange={this.handleChange}
                value={this.state.cardExpiry}
                autoComplete="off"
              />
              {showError && (<WrongDate />) || incorrectDate && (<WrongDate />)}
            </div>
          </div>

          {showSuccessfulPayment && (
            <div className="successfulPayment">
              <SuccessfulPay />
            </div>
          )}
          
          <div className="infoCard">
            <div className="inputCardOwner">
              <label className="label" htmlFor="card-owner">Власник карти</label>
              <Input
                id="card-owner"
                type="text"
                placeholder="CARDHOLDER NAME"
                name="cardOwner"
                onChange={this.handleChange}
                value={this.state.cardOwner}
                autoComplete="on"
              />
              {showError && (<EnterName />)}
            </div>

            <div className="inputCvv">
              <label className="label" htmlFor="cvv">CVV</label>
              <Input
                id="cvv"
                type="password"
                placeholder="XXX"
                name="cvv"
                onChange={this.handleChange}
                value={this.state.cvv}
                autoComplete="off"
              />
              {showError && (<CheckCvv />)}
            </div>
          </div>
          
          <div className="payment">
            <div className="paymentWrap">
              <div className="paymentCheckbox">
                <input id="remember" type="checkbox" />
                <label className="labelCheckbox" htmlFor="remember">Запам'ятати цю картку</label>
              </div>

              <button
                type="submit"
                className={"btn btn-danger " + (buttonIsDisabled === true ? 'buttonIsDisabled ' : '' )}
              >Оплатити {sumToPay}</button>
              <p className="timer">На виконання платежу 00:0{minutes}:{seconds < 10 ? '0' + seconds : seconds}</p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}