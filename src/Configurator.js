import React from "react";

export default function Configurator({
  setSizeOfThePizza,
  addOrRemovePaidTopping,
  setDough,
  setSauce,
  sauce,
  dough,
  paidToppings,
  sizeOfPizza,
  showOrder,
  setShowOrder,
  price
}) {
  return (
    <form>
      <fieldset>
        <legend>Choose pizza size</legend>
        <label>
          <input
            type="radio"
            checked={sizeOfPizza === 30}
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
            checked={sizeOfPizza === 35}
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
            checked={dough === "Thick crust"}
            onChange={(event) => {
              setDough(event.target.value);
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
            checked={dough === "Thin crust"}
            onChange={(event) => {
              setDough(event.target.value);
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
            checked={sauce === "Tomato"}
            onChange={(event) => {
              setSauce(event.target.value);
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
            checked={sauce === "White"}
            onChange={(event) => {
              setSauce(event.target.value);
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
            checked={sauce === "Acute"}
            onChange={(event) => {
              setSauce(event.target.value);
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
            checked={paidToppings.includes("Mozzarella")}
            onChange={addOrRemovePaidTopping}
          />
          {" Mozzarella"}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Cheddar"
            checked={paidToppings.includes("Cheddar")}
            onChange={addOrRemovePaidTopping}
          />
          {" Cheddar"}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Dor blue"
            checked={paidToppings.includes("Dor blue")}
            onChange={addOrRemovePaidTopping}
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
            checked={paidToppings.includes("Tomatoes")}
            onChange={addOrRemovePaidTopping}
          />
          {" Tomato"}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Mushrooms"
            checked={paidToppings.includes("Mushrooms")}
            onChange={addOrRemovePaidTopping}
          />
          {" Mushrooms"}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Pepper"
            checked={paidToppings.includes("Pepper")}
            onChange={addOrRemovePaidTopping}
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
            checked={paidToppings.includes("Bacon")}
            onChange={addOrRemovePaidTopping}
          />
          {" Bacon"}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Pepperoni"
            checked={paidToppings.includes("Pepperoni")}
            onChange={addOrRemovePaidTopping}
          />
          {" Pepperoni"}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Ham"
            checked={paidToppings.includes("Ham")}
            onChange={addOrRemovePaidTopping}
          />
          {" Ham"}
        </label>
      </fieldset>
      <br />
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          setShowOrder(!showOrder);
        }}
      >
        Final price of pizza: {price}
      </button>
    </form>
  );
}
