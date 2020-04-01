import React, { Component } from 'react';
import './Form.css';
import Form from './Form';
import { validateCardNumber, validateDateTwelveMonths, validateCurrentDate, validateCardDateLength} from '../../utils';
import { showErrorMessages } from '../HelperMessages/HelperMessages';

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

  checkInvalidCardNumber = () => {
    const { cardNumber } = this.state.fields;
    const { invalidCard } = showErrorMessages;

    const resultValidateCardNumber = validateCardNumber(cardNumber);

    if (!resultValidateCardNumber) {
      this.setState((state) => ({
        errors: {
          ...state.errors,
          cardNumber: invalidCard,
        }
      }));
    }
    return resultValidateCardNumber;
  }

  checkInvalidData = () => {
    const { cardExpiry } = this.state.fields;
    const { cardIsNotValid, wrongDate } = showErrorMessages;

    const resultValidateTwelveMonths = validateDateTwelveMonths(cardExpiry);
    const reusltValidateCurrentDate = validateCurrentDate(cardExpiry);
    const resultValidateDeteLength = validateCardDateLength(cardExpiry);
    
    if (resultValidateDeteLength || resultValidateTwelveMonths) {
      this.setState((state) => ({
        errors: {
          ...state.errors,
          cardExpiry: wrongDate,
        }
      }));
    }

    if (!resultValidateDeteLength && !reusltValidateCurrentDate) {
      this.setState((state) => ({ 
        errors: {
          ...state.errors,
          cardExpiry: cardIsNotValid,
        }
      }));
    }
    
    return !resultValidateTwelveMonths && reusltValidateCurrentDate && !resultValidateDeteLength;
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
      console.log('Submit');
      
      // handleCloseModal();
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