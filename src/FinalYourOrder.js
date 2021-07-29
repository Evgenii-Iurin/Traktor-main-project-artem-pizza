import React from "react";

export default function YourOrder({ selected, cost}) {
  return (
    <div>
      <h3>Your order:</h3>
      <ul>
        {selected.map(({ value }, i) => (
          <li key={i}>{value}</li>
        ))}
      </ul>
      <p>Pay: {cost}</p>
    </div>
  );
}
