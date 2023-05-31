import React, { Fragment } from "react";
import { useCounter } from "./hooks/counter";
import { useName } from "./hooks/name";

export const Main = () => {
  const { value, increment, decrement } = useCounter();
  const { name, updateName, resetName } = useName();

  return (
    <Fragment>
      <h1>Hello, {name}!</h1>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" placeholder="Name" value={name} onChange={updateName} />
      <button onClick={resetName}>Reset</button>
      <button onClick={decrement}>Decrement</button>
      <span>{value}</span>
      <button onClick={increment}>Increment</button>
    </Fragment>
  );
};
