import React from "react";
// import "./item.css";

function Item({ type, prefix }) {
  return <li>{`${prefix} ${type}`}</li>;
}

export default Item;
