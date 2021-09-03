import React from "react";
import Configurator from "./Configurator";
import YourOrder from "./OrderOfUser";

function calculatePrice(size, toppings) {
  const costOfOneTopping = 29;
  const basicPrice = 200;
  const priceOfBigPizza = 250;

  const currentPrice = toppings.length * costOfOneTopping;

  return size === 30
    ? basicPrice + currentPrice
    : priceOfBigPizza + currentPrice;
}

export default function App() {
  const [sizeOfPizza, setSizeOfThePizza] = React.useState(30);
  const [paidToppings, setPaidToppings] = React.useState([]);
  const [dough, setDough] = React.useState("Thick crust");
  const [sauce, setSauce] = React.useState("Tomato");
  const [showOrder, setShowOrder] = React.useState(false);
  const price = calculatePrice(sizeOfPizza, paidToppings);

  function addOrRemovePaidTopping(event) {
    const value = event.target.value;

    !paidToppings.includes(value)
      ? setPaidToppings((oldElements) => [...oldElements, value])
      : setPaidToppings(paidToppings.filter((toppings) => toppings !== value));
  }

  return (
    <div>
      <p>Learn react</p>
      <Configurator
        setSizeOfThePizza={setSizeOfThePizza}
        addOrRemovePaidTopping={addOrRemovePaidTopping}
        setShowOrder={setShowOrder}
        setSauce={setSauce}
        showOrder={showOrder}
        sizeOfPizza={sizeOfPizza}
        setDough={setDough}
        dough={dough}
        sauce={sauce}
        paidToppings={paidToppings}
        price={price}
      />
      <br />
      {showOrder && (
        <YourOrder
          paidToppings={paidToppings}
          dough={dough}
          sauce={sauce}
          sizeOfPizza={sizeOfPizza}
          price={price}
        />
      )}
    </div>
  );
}