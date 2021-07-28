import React from "react";

export default function YourOrder({ selected, currentPrice, title }) {
  return (
    <div>
      {title}
      <ul>
        {selected.map(({ value }, i) => (
          <li key={i}>{value}</li>
        ))}
      </ul>

      <h4>{currentPrice}</h4>
    </div>
  );
}