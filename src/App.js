import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import cardsData from "./CardsData.js";

function App() {
  const cardInfo = cardsData.map((info) => {
    return <Card {...info} />;
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="Cards">{cardInfo}</div>
    </div>
  );
}

export default App;

{
}
