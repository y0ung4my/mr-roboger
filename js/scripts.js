function beepBoop(inputtedNumber) {
  const numberRangeArray = [];

  for (i = 0; i <= inputtedNumber; i++) {
    if (i === 3) {
      numberRangeArray.push("Won't you be my neighbor?");
    }
    else if (i === 2) {
    numberRangeArray.push("Boop!");
    } else if (i === 1) {
    numberRangeArray.push("Beep!");
    } else {
    numberRangeArray.push(i);
    }
  }
  return numberRangeArray;
}