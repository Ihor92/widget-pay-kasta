import React from 'react';
import successful from '../Form/successful-payment.svg';
export function SuccessfulPay() {
  return (
    <div className="successfulPaymentPopup">
      <p className="successfulPayment--text">
        Оплата прошла успешно
      </p>
      <img className="successfulIcon" src={successful} alt="Icon" />
    </div>
  )
};

export function InvalidCard() {
  return (
    <span style={{ color: "red" }}>Невірна карта</span>
  )
};

export function WrongDate() {
  return (
    <span style={{ color: "red" }}>Невірний термін</span>
  )
};

export function EnterName() {
  return (
    <span style={{ color: "red" }}>Введіть ПІБ власника картки</span>
  )
};

export function CheckCvv() {
  return (
    <span style={{ color: "red" }}>Перевірте cvv</span>
  )
};

export const tooltipMessages = {
  cardOwnerTooltip: `Прізвище та ім'я людини  на яку випущена карта. Для іменних карта — нанесено на карту.`,
  cvvTooltip: "Три цифри що знаходяться з іншого боку карти.",
  rememberCard: "Запам'ятати картку, щоб в майбутньому не витрачати час.",
};

export const descriptionForInputs = {
  descriptionNumberCard: "Номер карти",
  descriptionCardExpiry: "Термін дії",
  descriptionCardOwner: "Власник карти",
  descriptionCvv: "CVV",
  descriptionRemember: "Запам'ятати цю картку",
  descriptionPay: "Оплатити",
  descriptionTimer: "На виконання платежу ",
}

export const placeholdDescription = {
  placeholdNumberCard: "#### #### #### ####",
  placeholdCardExpiry: "ММ / РР",
  placeholdCardOwner: "CARDHOLDER NAME",
  placeholdCvv: "XXX",
}