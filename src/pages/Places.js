import React from "react";
import "./Style.css";
import { useParams } from "react-router-dom";

function Places({ Data }) {
  const { title } = useParams();
  return (
    <div>
      {Data.filter((Data) => Data.title === title).map(
        ({ id, title, description }) => (
          <div key={id}>
            <h2
              className="place-name"
              style={{
                fontSize: "70px",
                color: "whitesmoke",
                marginBottom: "40px",
              }}
            >
              {title}
            </h2>

            <p>{description}</p>
          </div>
        )
      )}
    </div>
  );
}

export default Places;
