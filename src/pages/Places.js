import React from "react";
import { useParams } from "react-router-dom";

function Places({ Data }) {
  const { title } = useParams();
  return (
    <div>
      {Data.filter((Data) => Data.title === title).map(
        ({ id, title, description }) => (
          <div key={id}>
            <h2>{title}</h2>

            <p>{description}</p>
          </div>
        )
      )}
    </div>
  );
}

export default Places;
