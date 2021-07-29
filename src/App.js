import "./styles.css";
import React from "react";
import Configurator from "./Configurator";
import YourOrder from "./FinalYourOrder";

export default function App() {
  const [cost, setCost] = React.useState(200);
  const [selected, setSelected] = React.useState([]);
  const [showYourOrderComponent, setShowYourOrderComponent] = React.useState(false)
  const formInput = React.useRef();

  function finalCostOfOrder(event) {
    event.preventDefault();
    const item = formInput.current.querySelectorAll("input");
   
    for (let i = 0; i < item.length; i++) {
      if (item[i].checked) {
        setSelected((selected) => [...selected, { value: item[i].value }]);
      }
    }
    setShowYourOrderComponent(() => !(showYourOrderComponent))
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
      {showYourOrderComponent && <YourOrder
        selected={selected}
        cost = {cost}
      />}
    </div>
  );
}
