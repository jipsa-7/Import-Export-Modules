import React from "react";
import ReactDOM from "react-dom";
import pi, {
  doublePi,
  triplePi,
} from "./math.js"; /*importing pi seporatly as it is default and all the other things that we need to use here in braces */

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>{" "}
    {/* ble beckets are assosiated with doublePi because it is a function. */}
    <li>{triplePi()}</li>{" "}
    {/* ble beckets are assosiated with triplePi because it is a function. */}
  </ul>,
  document.getElementById("root")
);
