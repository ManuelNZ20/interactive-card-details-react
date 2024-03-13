import PropTypes from "prop-types";
import '../styles/card-cvc.css'

export const Cardcvc = ({ cvc }) => {
  return (
    <div className="card-cvc">
      <div className="numbers-cvc">
        <span className="numbers">{cvc}</span>
      </div>
    </div>
  );
};

Cardcvc.propTypes = {
  cvc: PropTypes.any.isRequired,
};
