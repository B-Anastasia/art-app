import React from "react";

const PersonDetails = ({ data }) => {
  const { name, gender, culture, birthPlace, deathPlace, displayDate } = data;
  return (
    <div className="person-details item">
      <div className="person-details__name">
        <h3>{name}</h3>
        <span>{displayDate}</span>
      </div>

      <dl className="item__list">
        <dt>Culture</dt>
        <dd>{culture}</dd>
        <dt>Gender</dt>
        <dd>{gender}</dd>
        <dt>Birth place</dt>
        <dd>{birthPlace}</dd>
        <dt>Death place</dt>
        <dd>{deathPlace}</dd>
      </dl>
    </div>
  );
};
export default PersonDetails;
