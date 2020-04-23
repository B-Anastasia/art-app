import React from "react";

const ItemList = (props) => {
  const { data, onItemSelected, children: renderFunction } = props;
  const items = data.map((item) => {
    const { id } = item;
    const itemChild = renderFunction(item);

    return (
      <li
        className="item-list__item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {itemChild}
      </li>
    );
  });
  return (
    <div className="item-list container">
      <ul>{items}</ul>
    </div>
  );
};

//   const items = data.map((item) => {
//     const { id } = item;
//     const { title, name, date, imageUrl } = item;
//     const itemChild = (
//       <React.Fragment>
//         <figure
//           className="item-list__item--image"
//           onClick={() => onItemSelected(id)}
//         >
//           <img src={imageUrl[0] + `?width=280`} alt="art" />
//         </figure>
//         <div className="item-list__item--title">
//           <h4>&#x201C; {title} &#x201D;</h4>
//           <span>{name}</span>
//           <span>{date}</span>
//         </div>
//       </React.Fragment>
//     );
//     return (
//       <li className="item-list__item" key={id}>
//         {itemChild}
//       </li>
//     );
//   });
//   return (
//     <div className="item-list container">
//       <ul>{items}</ul>
//     </div>
//   );
// };

export default ItemList;
