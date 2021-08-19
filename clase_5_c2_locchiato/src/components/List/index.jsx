import React from "react";
import animals from "../../animals";
import Perro from "../Perro";
import Item from "../Item";

const names = ["Pacha", "Firulais", "Maya", "Pipo"];

function List() {
  return (
    names.map((name, i) =>
      <Perro
        nombre={name}
        edad={animals[i].age}
        sexo={animals[i].gender}
        raza={animals[i].raza}
        tamaño={animals[i].size}
        render={(prefix, type) => (
          <Item prefix={prefix} type={type} />
        )}
      />
    )
  );
}


export default List;


/*
        <List >
          <h4>Nombre: {name}</h4>
          <ul>
            <Item prefix="Edad" type={animals[index].age} />
            <Item prefix="Sexo" type={animals[index].gender} />
            <Item prefix="Raza" type={animals[index].raza} />
            <Item prefix="Tamaño" type={animals[index].size} />
            <Item prefix="Color" type="red" />
          </ul>
        </List>
        


      <h4>Nombre: {props.name}</h4>
      <ul>
        {props.render("Edad", animals[props.index].age)}
        {props.render("Sexo", animals[props.index].gender)}
        {props.render("Raza", animals[props.index].raza)}
        {props.render("Tamaño", animals[props.index].size)}
      </ul>
       */


// function List(props) {
//   const { title, animal } = props;
//   return (
//     <section>
//       <h4>Nombre: {title}</h4>
//       <ul>
//         <Item prefix="Edad" type={animal.age} />
//         <Item prefix="Sexo" type={animal.gender} />
//         <Item prefix="Raza" type={animal.raza} />
//         <Item prefix="Tamaño" type={animal.size} />
//       </ul>
//     </section>
//   );
// }

