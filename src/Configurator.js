import React from "react";

export default function Configurator({
  setSizeOfThePizza,
  makeAListWithPaidToppings,
  setChosenDough,
  setChosenSuace,
  showComponentWithFinalOrder,
  price
}) {
  return (
    <form>
      <fieldset>
        <legend>Choose pizza size</legend>
        <label>
          <input
            type="radio"
            name="size"
            value="30 cm"
            onChange={() => {
              setSizeOfThePizza(30);
            }}
          />
          {" 30 cm"}
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="size"
            value="35 cm"
            onChange={() => {
              setSizeOfThePizza(35);
            }}
          />
          {" 35 cm"}
        </label>
      </fieldset>
      <br />
      <fieldset>
        <legend>Choose dough</legend>
        <label>
          <input
            type="radio"
            name="dough"
            value="Thick crust"
            onChange={(event) => {
              setChosenDough(event.target.value);
            }}
          />{" "}
          Thick crust
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="dough"
            value="Thin crust"
            onChange={(event) => {
              setChosenDough(event.target.value);
            }}
          />
          {" Thin trust"}
        </label>
      </fieldset>
      <br />
      <fieldset>
        <legend>Choose sauce</legend>
        <label>
          <input
            type="radio"
            name="sauce"
            value="Tomato"
            onChange={(event) => {
              setChosenSuace(event.target.value);
            }}
          />{" "}
          Tomato
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="sauce"
            value="White"
            onChange={(event) => {
              setChosenSuace(event.target.value);
            }}
          />{" "}
          White
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="sauce"
            value="Acute"
            onChange={(event) => {
              setChosenSuace(event.target.value);
            }}
          />{" "}
          Acute
        </label>
      </fieldset>
      <br />
      <fieldset>
        <legend>Cheese</legend>
        <label>
          <input
            type="checkbox"
            value="Mozzarella"
            onClick={(event) => {
              makeAListWithPaidToppings(
                event.target.checked,
                event.target.value
              );
            }}
          />
          {" Mozzarella"}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Cheddar"
            onClick={(event) => {
              makeAListWithPaidToppings(
                event.target.checked,
                event.target.value
              );
            }}
          />
          {" Cheddar"}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Dor blue"
            onClick={(event) => {
              makeAListWithPaidToppings(
                event.target.checked,
                event.target.value
              );
            }}
          />
          {" Dor blue"}
        </label>
      </fieldset>
      <br />
      <fieldset>
        <legend>Vegetables</legend>
        <label>
          <input
            type="checkbox"
            value="Tomatoes"
            onClick={(event) => {
              makeAListWithPaidToppings(
                event.target.checked,
                event.target.value
              );
            }}
          />
          {" Tomato"}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Mushrooms"
            onClick={(event) => {
              makeAListWithPaidToppings(
                event.target.checked,
                event.target.value
              );
            }}
          />
          {" Mushrooms"}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Pepper"
            onClick={(event) => {
              makeAListWithPaidToppings(
                event.target.checked,
                event.target.value
              );
            }}
          />
          {" Pepper"}
        </label>
      </fieldset>
      <br />
      <fieldset>
        <legend>Meat</legend>
        <label>
          <input
            type="checkbox"
            value="Bacon"
            onClick={(event) => {
              makeAListWithPaidToppings(
                event.target.checked,
                event.target.value
              );
            }}
          />
          {" Bacon"}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Pepperoni"
            onClick={(event) => {
              makeAListWithPaidToppings(
                event.target.checked,
                event.target.value
              );
            }}
          />
          {" Pepperoni"}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Ham"
            onClick={(event) => {
              makeAListWithPaidToppings(
                event.target.checked,
                event.target.value
              );
            }}
          />
          {" Ham"}
        </label>
      </fieldset>
      <br />
      <button type="submit" onClick={showComponentWithFinalOrder}>
        Final price of pizza: {price}
      </button>
    </form>
  );
}
