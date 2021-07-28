import React from "react";

export default function Configurator({ cost, setCost, onClick, formInput }) {
  return (
    <form ref={formInput}>
      <fieldset>
        <legend>Choose pizza size</legend>
        <label>
          <input
            type="radio"
            name="size"
            value="30 cm"
            onChange={(event) => {
              if (event.target.checked & (cost > 200)) {
                setCost((cost) => cost - 50);
              }
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
            onChange={(event) => {
              if (event.target.checked) {
                setCost((cost) => cost + 50);
              } else {
                setCost((cost) => cost - 50);
              }
            }}
          />
          {" 35 cm"}
        </label>
      </fieldset>
      <br />
      <fieldset>
        <legend>Choose dough</legend>
        <label>
          <input type="radio" name="dough" value="Thick crust" /> Thick crust
        </label>
        <br />
        <label>
          <input type="radio" name="dough" value="Thin crust" /> Thin crust
        </label>
      </fieldset>
      <br />
      <fieldset>
        <legend>Choose sauce</legend>
        <label>
          <input type="radio" name="sauce" value="Tomato" /> Tomato
        </label>
        <br />
        <label>
          <input type="radio" name="sauce" value="White" /> White
        </label>
        <br />
        <label>
          <input type="radio" name="sauce" value="Acute" /> Acute
        </label>
      </fieldset>
      <br />
      <fieldset>
        <legend>Cheese</legend>
        <label>
          <input
            type="checkbox"
            value="Mozzarella"
            onInput={(event) => {
              if (event.target.checked) {
                setCost((cost) => cost + 29);
              } else {
                setCost((cost) => cost - 29);
              }
            }}
          />
          {" Mozzarella"}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Cheddar"
            onInput={(event) => {
              if (event.target.checked) {
                setCost((cost) => cost + 29);
              } else {
                setCost((cost) => cost - 29);
              }
            }}
          />
          {" Cheddar"}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Dor blue"
            onInput={(event) => {
              if (event.target.checked) {
                setCost((cost) => cost + 29);
              } else {
                setCost((cost) => cost - 29);
              }
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
            onInput={(event) => {
              if (event.target.checked) {
                setCost((cost) => cost + 29);
              } else {
                setCost((cost) => cost - 29);
              }
            }}
          />
          {" Tomato"}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Mushrooms"
            onInput={(event) => {
              if (event.target.checked) {
                setCost((cost) => cost + 29);
              } else {
                setCost((cost) => cost - 29);
              }
            }}
          />
          {" Mushrooms"}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Pepper"
            onInput={(event) => {
              if (event.target.checked) {
                setCost((cost) => cost + 29);
              } else {
                setCost((cost) => cost - 29);
              }
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
            onInput={(event) => {
              if (event.target.checked) {
                setCost((cost) => cost + 29);
              } else {
                setCost((cost) => cost - 29);
              }
            }}
          />
          {" Bacon"}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Pepperoni"
            onInput={(event) => {
              if (event.target.checked) {
                setCost((cost) => cost + 29);
              } else {
                setCost((cost) => cost - 29);
              }
            }}
          />
          {" Pepperoni"}
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Ham"
            onInput={(event) => {
              if (event.target.checked) {
                setCost((cost) => cost + 29);
              } else {
                setCost((cost) => cost - 29);
              }
            }}
          />
          {" Ham"}
        </label>
      </fieldset>
      <br />
      <button onClick={onClick}>Final price of pizza: {cost}</button>
    </form>
  );
}
