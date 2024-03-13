import PropTypes from "prop-types";

import "../styles/header.css";
import { CardBank } from "./CardBank";
import { Cardcvc } from "./Cardcvc";
export const Header = ({ cards }) => {
  return (
    <header className="header">
      <div className="container-cards">
        <CardBank cards={cards} />
        <Cardcvc cvc={cards.cvc} />
      </div>
    </header>
  );
};

Header.propTypes = {
  cards: PropTypes.object.isRequired,
};
