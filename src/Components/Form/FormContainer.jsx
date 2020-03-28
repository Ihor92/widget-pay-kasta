import React, { Component } from 'react';
import './Form.css';
import Form from './Form';
import { showErrorMessages } from '../HelperMessages/HelperMessages';

const findToday = new Date();
const thisYear = findToday.getFullYear();
const thisMonth = findToday.getMonth();

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

    this.checkDisableButton();
  }

  checkDisableButton = () => {
    const { cardNumber, cardExpiry, cardOwner, cvv } = this.state.fields;

    if (cardNumber !== '' && cardExpiry !== '' && cardOwner !== '' && cvv !== '') {
      this.setState({
        buttonIsDisabled: false,
      })
    }
  }

  cardExpiryError = () => {
    const { invalidCard } = showErrorMessages;

    this.setState((state) => ({
      errors: {
        ...state.errors,
        cardNumber: invalidCard,
      }
    }));
    return false;
  }

  checkInvalidCardNumber = () => {
    const { cardNumber } = this.state.fields;
    const str = cardNumber;
    console.log(str.replace(/[_/]|\s+/g, '').split('').length === 16);
    return str.replace(/[_/]|\s+/g, '').split('').length === 16 ? true : this.cardExpiryError();
  }

  checkInvalidData = () => {
    const {
      fields: { cardExpiry },
      errors
    } = this.state;
    const { cardIsNotValid, wrongDate } = showErrorMessages;

    const separatorCardExpiry = cardExpiry.split(" ");
    separatorCardExpiry.splice(1, 1);
    
    const cardExpiryJoin = separatorCardExpiry.join('');
    const foundUnderscore = cardExpiryJoin.match('_') ? true : false;

    const completeYear = '20' + separatorCardExpiry[1];
    const userEnteredMonth = Number(separatorCardExpiry[0] - 1);
    const userEnteredYear = Number(completeYear);
    const userEnterDate = new Date(userEnteredYear, userEnteredMonth, 1);

    const todayCorectDate = new Date(thisYear, thisMonth, 1);

    if ((separatorCardExpiry[0] > '12' || foundUnderscore) || null) {
      this.setState((state) => ({
        errors: {
          ...state.errors,
          cardExpiry: wrongDate,
        }
      }));
      return false;
    } else if (userEnterDate < todayCorectDate) {
      this.setState((state) => ({ 
        errors: {
          ...state.errors,
          cardExpiry: cardIsNotValid,
        }
      }));
      return false;
    }
    return true;
  }

  preValidation = () => {
    const invalidDate = this.checkInvalidData();
    const invalidCardNumber = this.checkInvalidCardNumber();
    return invalidDate && invalidCardNumber;
  };

  submit = () => {
    const { handleCloseModal } = this.props;
    this.setState({
      showSuccessfulPayment: true
    })
    this.timerId = setTimeout(() => {
      // handleCloseModal();
      console.log("submit");
    }, 2000);
  } 

  handleSubmit = (event) => {
    event.preventDefault();
    this.preValidation() && this.submit();
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