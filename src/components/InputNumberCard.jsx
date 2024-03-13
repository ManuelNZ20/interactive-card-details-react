import PropTypes from "prop-types";
import { useEffect } from "react";

export const InputNumberCard = ({ onValueNumber }) => {

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
  useEffect(() => {
    document
      .getElementById("card-number")
      .addEventListener("keyup", formatCardNumber);
  }, []);

  return (
    <label htmlFor="card-number" className="card-info">
      <span className="title-card">CARD NUMBER</span>
      <input
        className="input-card"
        id="card-number"
        type="text"
        maxLength={19}
        placeholder="e.g. 1234 5678 9123 0000"
        onChange={({ target }) => {
          const numbers = target.value;
          onValueNumber(numbers);
        }}
      />
    </label>
  );
};

InputNumberCard.propTypes = {
  onValueNumber: PropTypes.func.isRequired,
};
