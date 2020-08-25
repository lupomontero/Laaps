import React from "react";
import BotonImage from "../botonImage/index.js";

import usuario from "../../images/usuario.svg";
import coche from "../../images/coche.svg";

const Main = () => {
  return (
    <>
      <div>
        <h1>Laaps</h1>
      </div>
      <div>
        <BotonImage image={usuario} adress="/users" />
      </div>
      <div>
        <BotonImage image={coche} adress="/admin" />
      </div>
    </>
  );
};

export default Main;
