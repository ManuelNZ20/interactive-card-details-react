import { useState } from "react";

import { FormCard, Header } from "./components";

const App = () => {
  const [cards, setCards] = useState({
    numbers: "0000 0000 0000 0000",
    name: "Manuel Walter",
    exp: {
      mm: "12",
      yy: "12",
    },
    cvc: 123,
  });
  return (
    <>
      <Header cards={cards}/>
      <main className="main container-info-card">
        <FormCard cards={cards} setCards={setCards} />
      </main>
    </>
  );
};

export default App;
