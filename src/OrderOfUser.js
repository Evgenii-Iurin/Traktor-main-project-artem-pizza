import React from "react";

export default function YourOrder({
  paidToppings,
  dough,
  sauce,
  sizeOfPizza,
  price
}) {
  return (
    <div>
      <h3>Your order:</h3>
      <ul>
        {paidToppings.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
        <li>{dough}</li>
        <li>{sauce}</li>
      </ul>
      <p>The size of your pizza: {sizeOfPizza}</p>
      <p>Pay: {price}</p>
    </div>
  );
}