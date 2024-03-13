import PropTypes from "prop-types";
import "../styles/card-bank.css";

export const CardBank = ({ cards }) => {
  return (
    <div className="card-numbers">
      <div className="header-points">
        <div className="point-1"></div>
        <div className="point-2"></div>
      </div>
      <div className="container-info">
        <p className="numbers">
          {cards.numbers ? cards.numbers : "0000 0000 0000 0000"}
        </p>
        <div className="container-line-card">
          <p className="card-name">
            {cards.name ? cards.name.toUpperCase() : "NO NAME"}
          </p>
          <p className="exp-date">
            {cards.exp.mm ? `${cards.exp.mm} / ${cards.exp.yy}` : "00/00"}
          </p>
        </div>
      </div>
    </div>
  );
};

CardBank.propTypes = {
  cards: PropTypes.object.isRequired,
};
