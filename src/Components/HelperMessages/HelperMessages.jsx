import React from 'react';

export function SuccessfulPay() {
  return (
    <p className="successfulPayment--text">Оплата прошла успешно</p>
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