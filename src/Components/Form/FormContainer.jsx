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
      // data card
      cardNumber: '',
      cardExpiry: '',
      cardOwner: '',
      cvv: '',
      
      // show errors
      showErrorCardNamber: false,
      showErrorCardExpiry: false,
      showErrorCardOwner: false,
      showErrorCvv: false,
        
      buttonIsDisabled: true,
      showSuccessfulPayment: false,
      timer: 600,
      timeLeft: null,
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
    const value = target.type === 'checkbox' ? target.checked : target.value;
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

    const cardNumberLength = cardNumber.length === validDataLength.cardNumber;
    const cardExpiryLength = cardExpiry.length === validDataLength.cardExpiry && corectMonth + lasNumbersYear <= cardExpiry;
    const cardOwnerLength = cardOwner !== '';
    const cvvLength = cvv.length === validDataLength.cvv;

    if (cardNumberLength && cardExpiryLength && cardOwnerLength && cvvLength) {
      event.preventDefault();
      this.handleSubmit();
      
    } else if (!cardNumberLength) {
      this.setState({
        showErrorCardNamber: true,
        cvv: '',
      });
      this.closeError();
      event.preventDefault();

    } else if (!cardExpiryLength) {
      this.setState({
        showErrorCardExpiry: true,
        cardExpiry: '',
        cvv: '',
      });
      this.closeError();
      event.preventDefault();

    } else if (!cardOwnerLength) {
      this.setState({
        showErrorCardOwner: true,
        cvv: '',
      });
      this.closeError();
      event.preventDefault();

    } else if (!cvvLength) {
      this.setState({
        showErrorCvv: true,
        cvv: '',
      });
      this.closeError();
      event.preventDefault();
    }
  }

  handleSubmit = () => {
    const { handleCloseModal } = this.props;
    this.setState({
      showSuccessfulPayment: true
    })
    this.timerId = setTimeout(() => {
      handleCloseModal();
    }, 4000);
  }

  closeError = () => {
    setTimeout(() => {
      this.setState({
        showErrorCardNamber: false,
        showErrorCardExpiry: false,
        showErrorCardOwner: false,
        showErrorCvv: false,
      })
    }, 5000);
  }

  render() {
    const { sumToPay } = this.props;

    return (
      <Form
        buttonIsDisabled={this.state.buttonIsDisabled}
        showErrorCardNamber={this.state.showErrorCardNamber}
        showErrorCardExpiry={this.state.showErrorCardExpiry}
        showErrorCardOwner={this.state.showErrorCardOwner}
        showErrorCvv={this.state.showErrorCvv}
        timer={this.state.timer}
        cardNumber={this.state.cardNumber}
        cardExpiry={this.state.cardExpiry}
        cardOwner={this.state.cardOwner}
        cvv={this.state.cvv}
        showSuccessfulPayment={this.state.showSuccessfulPayment}
        checkDataLength={this.checkDataLength}
        handleChange={this.handleChange}
        sumToPay={sumToPay}
      />
    );
  }
}