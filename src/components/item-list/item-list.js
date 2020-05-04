import React from "react";
import PropTypes from "prop-types";

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

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired,
};

export default ItemList;
