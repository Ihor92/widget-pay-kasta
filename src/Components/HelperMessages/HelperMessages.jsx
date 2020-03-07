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
