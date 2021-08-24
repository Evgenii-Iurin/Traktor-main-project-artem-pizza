import "./styles.css";
import React from "react";
import Configurator from "./Configurator";
import YourOrder from "./FinalYourOrder";

function calculateThePrice(size, countOfToppings) {
  const costOfOneTopping = 29;
  const currentPrice = countOfToppings.length * costOfOneTopping;

  if (countOfToppings.length > 0) {
    return size === 30 ? 200 + currentPrice : 250 + currentPrice;
  } else {
    return size === 30 ? 200 : 250;
  }
}

export default function App() {
  const [sizeOfPizza, setSizeOfThePizza] = React.useState(30);
  const [listWithPaidToppings, setListWithPaidToppings] = React.useState([]);
  const [chosenDough, setChosenDough] = React.useState("");
  const [chosenSuace, setChosenSuace] = React.useState("");
  const price = calculateThePrice(sizeOfPizza, listWithPaidToppings);
  const [
    finalOrderComponentState,
    setFinalOrderComponentState
  ] = React.useState(false);

  function makeAListWithPaidToppings(checkboxState, checkboxValue) {
    if (checkboxState) {
      return setListWithPaidToppings((oldElements) => [
        ...oldElements,
        checkboxValue
      ]);
    } else {
      setListWithPaidToppings(
        listWithPaidToppings.filter(
          (newProduct) => newProduct !== checkboxValue
        )
      );
    }
  }

  function showComponentWithFinalOrder(event) {
    event.preventDefault();
    setFinalOrderComponentState(!finalOrderComponentState);
  }

  return (
    <div>
      <Configurator
        setSizeOfThePizza={setSizeOfThePizza}
        makeAListWithPaidToppings={makeAListWithPaidToppings}
        setChosenDough={setChosenDough}
        setChosenSuace={setChosenSuace}
        showComponentWithFinalOrder={showComponentWithFinalOrder}
        price={price}
      />
      <br />
      {finalOrderComponentState && (
        <YourOrder
          listWithPaidToppings={listWithPaidToppings}
          chosenDough={chosenDough}
          chosenSuace={chosenSuace}
          sizeOfPizza={sizeOfPizza}
          price={price}
        />
      )}
    </div>
  );
}
