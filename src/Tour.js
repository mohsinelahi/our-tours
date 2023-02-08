import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <div className="single-tour-thumb">
        <img src={image} alt={name} />
      </div>
      <div className="single-tour-info">
        <div className="single-tour-name single-tour-price">
          <h4>{name}</h4>
          <p>${price}</p>
        </div>
        <p>
          {readMore ? info : `${info.substring("0", 200)}...`}
          <button className="read-more" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : " Read More"}
          </button>
        </p>
        <button className="delete-tour" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
