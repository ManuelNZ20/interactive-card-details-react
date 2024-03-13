import PropTypes from "prop-types";
import { InputNumberCard } from "./InputNumberCard";
import { InputCard } from "./InputCard";
import "../styles/form-card.css";
import { useState } from "react";
import { FormComplete } from "./FormComplete";

export const FormCard = ({ cards, setCards }) => {
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const onValueNumber = (numbers) => {
    setCards({ ...cards, numbers });
  };

  const onValueCard = (e) => {
    const { name, value } = e.target;
    setCards({ ...cards, [name]: value });
  };

  const onValueExp = (e) => {
    const { name, value } = e.target;
    const exp = cards.exp;
    setCards({ ...cards, exp: { ...exp, [name]: value } });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setIsFormCompleted(!isFormCompleted);
  };
  return (
    <form className="form-card" onSubmit={submitForm}>
      {isFormCompleted ? (
        <FormComplete />
      ) : (
        <div className="container-form">
          <label htmlFor="cardholder-name" className="">
            <span className="title-card">CARDHOLDER NAME</span>
            <InputCard
              idFor="cardholder-name"
              placeholder="e.g. Jane Applessed"
              name={"name"}
              onValueCard={onValueCard}
              maxLength={100}
            />
          </label>
          <InputNumberCard onValueNumber={onValueNumber} />
          <div className="grid">
            <span className="title-card">EXP. DATE ( MM/YY )</span>
            <span className="title-card">CVC</span>
            <div className="container-row">
              <label htmlFor="mm">
                <InputCard
                  key={"mm"}
                  idFor="mm"
                  name="mm"
                  onValueCard={onValueExp}
                  placeholder="MM"
                  maxLength={2}
                />
              </label>
              <label htmlFor="yy">
                <InputCard
                  key={"yy"}
                  idFor="yy"
                  name="yy"
                  onValueCard={onValueExp}
                  placeholder="YY"
                  maxLength={2}
                />
              </label>
            </div>
            <label htmlFor="cvc">
              <InputCard
                key={"cvc"}
                idFor="cvc"
                name="cvc"
                onValueCard={onValueCard}
                placeholder="e.g. 123"
                maxLength={3}
              />
            </label>
          </div>
        </div>
      )}

      <button className="btn btn-submit">
        {isFormCompleted ? "Continue" : "Confirm"}
      </button>
    </form>
  );
};

FormCard.propTypes = {
  cards: PropTypes.object.isRequired,
  setCards: PropTypes.func.isRequired,
};
