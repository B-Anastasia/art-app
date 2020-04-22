import React from "react";

const Details = ({ data }) => {
  const {
    title,
    date,
    name,
    culture,
    dimensions,
    division,
    publications,
    exhibitions,
    text,
    imageUrl,
  } = data;

  let getDataTag = (property) => {
    return property
      ? property.map((el) => {
          const elText = { __html: el };
          const keyUn = Math.floor(Math.random() * (60000 - 50)) + 50;
          return <div dangerouslySetInnerHTML={elText} key={keyUn} />;
        })
      : null;
  };

  const exhibitionsData = getDataTag(exhibitions);

  const publicationsData = getDataTag(publications);

  const textData = getDataTag(text);

  const images = imageUrl.map((el, i) => {
    if (i === 0) {
      return (
        <div className="main" key={i}>
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
        <dd>{publicationsData}</dd>
        <dt>Exhibitions History</dt>
        <dd>{exhibitionsData}</dd>
        <dt>Text</dt>
        <dd>{textData}</dd>
      </dl>
    </div>
  );
};

export default Details;
