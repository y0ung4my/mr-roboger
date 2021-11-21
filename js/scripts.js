function beepBoop(number) {
  parseInt(number);
  const numberRangeArray = [];

  for (i = 0; i <= number; i++) {
    if (i.toString().includes("3")) {
      numberRangeArray.push("Won't you be my neighbor?");
    }
    else if (i.toString().includes("2")) {
    numberRangeArray.push("Boop!");
    } else if (i.toString().includes("1")) {
    numberRangeArray.push("Beep!");
    } else {
    numberRangeArray.push(i);
    }
  }
  return numberRangeArray.join(", ");
}

$(document).ready(function(){
  $("form#mr-roboger").submit(function(event){
    event.preventDefault();
    const numberInput = $("#number-input").val();
    $("#robot-output").html(beepBoop(numberInput));
    $(".box-2").show();
  });
});