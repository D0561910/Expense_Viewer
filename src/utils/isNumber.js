const isNumber = (number) => {
  return !isNaN(parseFloat(number)) && isFinite(number);
};

export default isNumber;