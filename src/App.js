
import React from "react";
import Configurator from "./Configurator";
import YourOrder from "./FinalYourOrder";

export default function App() {
  const [cost, setCost] = React.useState(200);
  const [selected, setSelected] = React.useState([]);
  const [currentPrice, setCurrentPrice] = React.useState("");
  const [title, setTitle] = React.useState("");
  const formInput = React.useRef();

  function finalCostOfOrder(event) {
    event.preventDefault();
    const item = formInput.current.querySelectorAll("input");
    for (let i = 0; i < item.length; i++) {
      if (item[i].checked) {
        setSelected((selected) => [...selected, { value: item[i].value }]);
      }
    }

    setCurrentPrice((currentPrice) => "Final price: " + cost);
    setTitle((title) => <h3>Your order</h3>);
  }

  return (
    <div>
      <Configurator
        cost={cost}
        setCost={setCost}
        onClick={finalCostOfOrder}
        formInput={formInput}
      />
      <br />
      <YourOrder
        selected={selected}
        currentPrice={currentPrice}
        title={title}
      />
    </div>
  );
}