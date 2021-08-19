import React from "react";

const animals = [
  {
    age: 24,
    gender: "Macho de las praderas",
    raza: "Pastor peluche",
    size: "Grandote",
  },
  {
    age: 15,
    gender: "Hembra hermosa",
    raza: "Pastor peluche",
    size: "Grandote",
  },
  {
    age: 3,
    gender: "Machote",
    raza: "Pastor peluche",
    size: "Grandote",
  },
  {
    age: 34,
    gender: "Perrote",
    raza: "Pastor peluche",
    size: "Grandote",
  },
];

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
 */

function List(props, index) {
  return (
    <>
      <h4>Nombre: {props.name}</h4>
      <ul>
        {props.render("Edad", animals[props.index].age)}
        {props.render("Sexo", animals[props.index].gender)}
        {props.render("Raza", animals[props.index].raza)}
        {props.render("Tamaño", animals[props.index].size)}
      </ul>
    </>
  );
}



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

export default List;
