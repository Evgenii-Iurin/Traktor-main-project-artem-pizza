import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Configurator from "./Configurator"


describe("Correctly render", ()=>{
  it("render app", ()=>{
    render(<App/>)
  })
})

describe("Input value", () => {
  it("updates on change", () => {
    const { getByText }  = render(<Configurator paidToppings="paidToppings}"/>)
    const seacrButton = getByText(/Final price of pizza:/i) //find the button
    expect(seacrButton).toBeTruthy()
  })
})