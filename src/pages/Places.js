import React from "react";
import "./Style.css";
import { Link, useParams } from "react-router-dom";

function Places({ Data }) {
  const { title } = useParams();
  return (
    <div>
      {Data.filter((Data) => Data.title === title).map(
        ({ id, title, description, src }) => (
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
            <div>
              <div class="card">
                <input type="radio" name="select" id="slide_1" checked />
                <input type="radio" name="select" id="slide_2" />
                <input type="radio" name="select" id="slide_3" />
                <input type="checkbox" id="slideImg" />

                <div class="slider">
                  <label for="slide_1" class="slide slide_1"></label>
                  <label for="slide_2" class="slide slide_2"></label>
                  <label for="slide_3" class="slide slide_3"></label>
                </div>

                <div class="inner_part">
                  <label for="slideImg" class="img">
                    <img alt="" class="img_1" src={src} />
                  </label>
                  <div class="content content_1">
                    <div class="title">
                      <h1>{title}</h1>
                    </div>
                    <div class="text">
                      <p>{description}</p>
                    </div>
                    <button>Read More</button>
                  </div>
                </div>

                <div class="inner_part">
                  <label for="slideImg" class="img">
                    <img alt="" class="img_2" src={src} />
                  </label>
                  <div class="content content_2">
                    <div class="title">Ankara</div>
                    <div class="text">
                      Ankara is Turkey's beating heart, second largest city,
                      located in the Central Anatolia region and home to the
                      Grand National Assembly of Turkey.
                    </div>
                    <button>Read More</button>
                  </div>
                </div>

                <div class="inner_part">
                  <label for="slideImg" class="img">
                    <img alt="" class="img_3" src={src} />
                  </label>
                  <div class="content content_3">
                    <div class="title">İzmir</div>
                    <div class="text">
                      Located on the shores of the Aegean Sea, west of the
                      Anatolian Peninsula, İzmir is the third-largest city in
                      Turkey.
                    </div>
                    <button>Read More</button>
                  </div>
                </div>
              </div>
            </div>

            <button>
              {" "}
              <Link className="link-button" to="/">
                Go back
              </Link>
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default Places;
