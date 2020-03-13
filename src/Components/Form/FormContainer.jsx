import React, { Component } from 'react';
import './Form.css';
import Form from './Form';

// const validDataLength = {
//   cardNumber: 16,
//   cardExpiry: 4,
//   cvv: 3,
//   cardOwner: 40,
// }

const findToday = new Date();
const findThisYear = findToday.getFullYear();
const findThisMonth = findToday.getMonth();
let lasNumbersYear = findThisYear.toString().substring(2);
let corectMonth = findThisMonth < 9 ? '0' + findThisMonth : findThisMonth;


export default class FormContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        cardNumber: '',
        cardExpiry: '',
        cardOwner: '',
        cvv: '',
      },
      
      showError: {
        showErrorCardNamber: false,
        showErrorCardExpiry: false,
        showErrorCardOwner: false,
        showErrorCvv: false,
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
      ...this.state, fields: {
        ...this.state.fields,
        [name]: e.target.value,
      }
    })
    
    this.invalidData();
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

  invalidData = (event) => { // onSubmit
    const { cardExpiry, cvv, cardNumber, cardOwner } = this.state.fields;

    let separator = cardExpiry.split(" ");
    let removeSlash = separator.splice(1, 1);
    
    let cardExpiryToNum = separator.join();
    console.log(cardExpiryToNum.length);
    
    // console.log(removeSlash);
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

  // closeError = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       showErrorCardNamber: false,
  //       showErrorCardExpiry: false,
  //       showErrorCardOwner: false,
  //       showErrorCvv: false,
  //     })
  //   }, 5000);
  // }

  render() {
    const { sumToPay } = this.props;

    return (
      <Form
        buttonIsDisabled={this.state.buttonIsDisabled}
        showError={this.state.showError}
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