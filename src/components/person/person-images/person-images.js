import React from "react";
import PropTypes from "prop-types";

const PersonImages = ({ images, onItemSelected }) => {
  const items = images.map((el) => {
    const { id } = el;
    const { imageUrl, date, title } = el;

    return (
      <li
        className="item-list__item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        <figure className="item-list__item--image">
          <img src={imageUrl + `?width=280`} alt="art" />
        </figure>
        <div className="item-list__item--title">
          <h4>&#x201C; {title} &#x201D;</h4>
          <span>{date}</span>
        </div>
      </li>
    );
  });
  return (
    <div className="item-list container">
      <ul>{items}</ul>
    </div>
  );
};

PersonImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemSelected: PropTypes.func.isRequired,
};
export default PersonImages;
