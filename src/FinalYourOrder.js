import React from "react";

export default function YourOrder({
  listWithPaidToppings,
  chosenDough,
  chosenSuace,
  sizeOfPizza,
  price
}) {
  return (
    <div>
      <h3>Your order:</h3>
      <ul>
        {listWithPaidToppings.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
        <li>{chosenDough}</li>
        <li>{chosenSuace}</li>
      </ul>
      <p>The size of your pizza: {sizeOfPizza}</p>
      <p>Pay: {price}</p>
    </div>
  );
}
