import React from "react";
const Details = ({ data }) => {
  const {
    title,
    date,
    name,
    culture,
    dimensions,
    division,
    publicationsHistory,
    exhibitionsHistory,
    text,
    imageUrl,
  } = data;

  const exhibitions = exhibitionsHistory
    ? exhibitionsHistory.map((el, i) => {
        return <dd key={i}>{el}</dd>;
      })
    : null;

  const publications = publicationsHistory
    ? publicationsHistory.map((el, i) => {
        return <dd key={i}>{el}</dd>;
      })
    : null;

  const textItem = text
    ? text.map((el, i) => {
        return <dd key={i}>{el}</dd>;
      })
    : null;

  const images = imageUrl.map((el, i) => {
    if (i === 0) {
      return (
        <div className="main">
          {/*<img src={imageUrl[i]} alt="art" />*/}
          <a data-fancybox="gallery" href={imageUrl[i]}>
            <img src={imageUrl[i]} alt="art" />
          </a>
        </div>
      );
    }
    return (
      <a data-fancybox="gallery" href={imageUrl[i]}>
        <img src={imageUrl[i] + `?width=280`} alt="art" />
      </a>
    );
  });
  return (
    <div className="item container">
      <div className="item__images">{images}</div>
      <dl className="item__list">
        <dt>Title</dt>
        <dd>&#x201C; {title} &#x201D;</dd>
        <dt>Dated</dt>
        <dd>{date}</dd>
        <dt>Artist</dt>
        <dd>{name}</dd>
        <dt>Culture</dt>
        <dd>{culture}</dd>
        <dt>Dimensions</dt>
        <dd>{dimensions}</dd>
        <dt>Division</dt>
        <dd>{division}</dd>
        <dt>Publications History</dt>
        <dd>{publications}</dd>
        <dt>Exhibitions History</dt>
        <dd>{exhibitions}</dd>
        <dt>Text</dt>
        <dd>{textItem}</dd>
      </dl>
    </div>
  );
};

export default Details;
