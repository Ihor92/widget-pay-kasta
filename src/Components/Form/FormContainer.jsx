import React, { Component } from 'react';
import './Form.css';
import Form from './Form';
import { showErrorMessages } from '../HelperMessages/HelperMessages';

const findToday = new Date();
const findThisYear = findToday.getFullYear();
const findThisMonth = findToday.getMonth();
let corectYear = findThisYear.toString().substring(2);
let corectMonth = findThisMonth < 9 ? '0' + findThisMonth : findThisMonth;

const defaultState = {
  cardNumber: '',
  cardExpiry: '',
  cardOwner: '',
  cvv: '',
}

export default class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        ...defaultState,
      },
      
      errors: {
        ...defaultState,
      },
        
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

  handleChange = (e) => {
    const name = e.target.name;
    
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: e.target.value,
      },
      errors: {
        ...this.state.errors,
        [name]: '',
      }
    })
    // this.invalidCardNumber();
    // this.invalidData();
    this.checkAllInputs();
  }

  checkAllInputs = () => {
    const { cardNumber, cardExpiry, cardOwner, cvv } = this.state.fields;

    if (cardNumber !== '' && cardExpiry !== '' && cardOwner !== '' && cvv !== '') {
      this.setState({
        buttonIsDisabled: false,
      })
    }
  }

  invalidCardNumber = (event) => {
    const {
      fields: { cardNumber },
      errors
    } = this.state;
    const { invalidCard } = showErrorMessages;

    const removedSpaces = /\s*/;
    const enteredCardNumber = cardNumber.split(removedSpaces).join('');
    const enteredCardNumberToNum = Number(enteredCardNumber)
    if (enteredCardNumberToNum.length < 16) {
      this.setState({
        errors: {
          ...errors,
          cardExpiry: invalidCard,
        }
      });
    }
  }

  invalidData = (event) => { // onSubmit
    const {
      fields: { cardExpiry },
      errors
    } = this.state;
    const { cardIsNotValid, wrongDate } = showErrorMessages;

    const separatorCardExpiry = cardExpiry.split(" ");
    separatorCardExpiry.splice(1, 1);
    const cardExpiryJoin = separatorCardExpiry.join('');
    const cardExpiryToNum = Number(cardExpiryJoin);
    const checkTwelveMonths = Number(separatorCardExpiry[0]);
    
    if (checkTwelveMonths > 12 || cardExpiryToNum.length !== 4 ) {
      this.setState({
        errors: {
          ...errors,
          cardExpiry: wrongDate,
        }
      });
    } else if (corectMonth + corectYear > cardExpiryToNum) {
      this.setState({
        errors: {
          ...errors,
          cardExpiry: cardIsNotValid,
        }
      });
    }
  }

  handleSubmit = () => {
    const { handleCloseModal } = this.props;
    this.setState({
      showSuccessfulPayment: true
    })
    this.timerId = setTimeout(() => {
      handleCloseModal();
    }, 2000);
  }

  render() {
    const { sumToPay } = this.props;

    return (
      <Form
        buttonIsDisabled={this.state.buttonIsDisabled}
        errors={this.state.errors}
        fields={this.state.fields}
        timer={this.state.timer}
        showSuccessfulPayment={this.state.showSuccessfulPayment}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        sumToPay={sumToPay}
      />
    );
  }
}