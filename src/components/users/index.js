import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

import { UserContext } from "../../context/UserProvider.js";

const Users = () => {
  const { usuario, LogIn, closeSesion } = React.useContext(UserContext);
  return (
    <>
      <div>
        <Link to="/registerUser">
          <button className={styles.button}>Registrarse</button>
        </Link>
      </div>
      <div>
        <button className={styles.button} onClick={LogIn}>
          Login
        </button>
      </div>
      <div>
        <button className={styles.button} onClick={closeSesion}>
          Cerrar Sesion
        </button>
      </div>

      <div>
        <span>Cliente</span>
      </div>
    </>
  );
};

export default Users;
