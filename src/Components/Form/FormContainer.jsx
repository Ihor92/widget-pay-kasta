import React, { Component } from 'react';
import './Form.css';
import Form from './Form';

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


export default class FormContainer extends Component{
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
    const {
      buttonIsDisabled,
      showError,
      incorrectDate,
      showSuccessfulPayment,
      timer,
      cardNumber,
      cardExpiry,
      cardOwner,
      cvv
    } = this.state;

    const { sumToPay } = this.props;

    return (
      <Form
        buttonIsDisabled={buttonIsDisabled}
        showError={showError}
        incorrectDate={incorrectDate}
        timer={timer}
        cardNumber={cardNumber}
        cardExpiry={cardExpiry}
        cardOwner={cardOwner}
        cvv={cvv}
        sumToPay={sumToPay}
        showSuccessfulPayment={showSuccessfulPayment}
        checkDataLength={this.checkDataLength}
        handleChange={this.handleChange}
      />
    );
  }
}