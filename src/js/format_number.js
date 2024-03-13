function formatCardNumber() {
  var cardNumberInput = document.getElementById("card-number");
  var cardNumber = cardNumberInput.value.replace(/\D/g, "");
  var formattedCardNumber = "";

  for (var i = 0; i < cardNumber.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedCardNumber += " ";
    }
    formattedCardNumber += cardNumber.charAt(i);
  }

  cardNumberInput.value = formattedCardNumber;
}

// Agregar un evento keyup al input para llamar a la función de formato
document
  .getElementById("card-number")
  .addEventListener("keyup", formatCardNumber);
