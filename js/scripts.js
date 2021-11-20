function beepBoop(inputtedNumber) {
  const numberRangeArray = [];

  for (i = 0; i <= inputtedNumber; i++) {
    if (i === 1) {
    numberRangeArray.push("beep");
    } else {
    numberRangeArray.push(i);
    }
  }
  return numberRangeArray;
}