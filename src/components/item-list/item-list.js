import React from "react";

const ItemList = (props) => {
  const { data, onItemSelected } = props;
  const items = data.map(({ title, name, date, imageUrl, id }) => {
    return (
      <div className="list-grid__item" key={id}>
        <figure
          className="list-grid__item--image"
          onClick={() => onItemSelected(id)}
        >
          <img src={imageUrl[0] + `?width=280`} alt="art" />
        </figure>
        <div className="list-grid__item--title">
          <h4>&#x201C; {title} &#x201D;</h4>
          <span>{name}</span>
          <span>{date}</span>
        </div>
      </div>
    );
  });
  return <div className="list-grid container">{items}</div>;
};

export default ItemList;
