import React from "react";
//import styles from "./style.module.css";

const RegisterUser = () => {
  return (
    <>
      <form>
        <div>
          <label>Nombre</label>
          <input type="text" id="nombre" placeholder="nombre" name="nombre" />
        </div>
        <div>
          <label>Telefono</label>
          <input
            type="text"
            id="telefono"
            placeholder="telefono"
            name="telefono"
          />
        </div>
        <div>
          <label>e-mail</label>
          <input type="text" id="email" placeholder="email" name="email" />
        </div>
        <div>
          <input type="submit" value="Crear cuenta" />
        </div>
      </form>
    </>
  );
};

export default RegisterUser;
