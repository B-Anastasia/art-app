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

export default ItemList;
