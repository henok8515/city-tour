import React from "react";
import { Link } from "react-router-dom";

function Sofumer() {
  return (
    <div>
      <div className="container">
        <img
          alt=""
          src="https://images.squarespace-cdn.com/content/v1/593ebe79893fc075873be1e5/1503089437811-4DI2ELDDGTWYBBG1LN77/download.jpg"
          className="place-img-container"
        />

        <p className="content">
          Sof Omar Cave is the longest cave in Ethiopia at 15.1 kilometres (9.4
          mi) long. When surveyed in 1972, it was the longest cave in Africa.
          Since then explorations in Algeria (Rhar Bou Ma’za - the Tafna River
          Cave 18.4 km) and Madagascar (Ambatoharanana - Crocodile Cave 18.1 km)
          have overtaken it. [1] It is situated to the east of Robe, in the Bale
          Zone of the Oromia Region in southeastern Ethiopia, through which the
          Weyib River (Gestro River) flows.[2] It sinks at the Ayiew Maco
          entrance and reappears at the Holuca resurgence 1 kilometre (0.62 mi)
          away. According to tradition Sof Omar was the name of a Muslim holy
        </p>
      </div>
      <Link to="/">go back</Link>;
    </div>
  );
}

export default Sofumer;
