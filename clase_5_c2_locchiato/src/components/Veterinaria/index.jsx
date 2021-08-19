import React from "react";

function Veterinaria(props) {
  return (
    <section>
      <h2>Clientes caninos de Veterinario</h2>
      {props.children}  
    </section>
  );
}

export default Veterinaria;
