function beepBoop(inputtedNumber) {
  const numberRangeArray = [];
  numberRangeArray.push(inputtedNumber);

  for (i = 0; i <= inputtedNumber; i++) {
    numberRangeArray.push(i);
  }
  return numberRangeArray;
}