export const validateCardNumber = (cardNumber) => {
  const reg16Digit = /^\d{16}$/;

  return reg16Digit.test(cardNumber.replace(/[^0-9]+/g, ''));
}

export const validateCardDateLength = (cardExpiry) => {
  const separatorCardExpiry = cardExpiry.split("/");
  const cardExpiryJoin = separatorCardExpiry.join('');
  
  return cardExpiryJoin.match('_') ? true : false;
}

export const validateDateTwelveMonths = (cardExpiry) => {
  const separatorCardExpiry = cardExpiry.split("/");
  const toNumberMonth = +separatorCardExpiry[0];

  return toNumberMonth > 12;
}

export const validateCurrentDate = (cardExpiry) => {
  const today = new Date();
  const currYear = today.getFullYear();
  const currMonth = today.getMonth() + 1;
  const currYearShort = currYear.toString().substring(2);
  const [cardMonth, cardYear] = cardExpiry.split("/");
  
  return +cardYear >= currYearShort && +cardMonth >= currMonth;
}
