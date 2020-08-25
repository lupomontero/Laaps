import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Button = ({ adress, text }) => {
  return (
    <Link to={adress}>
      <button className={styles.button}>{text}</button>
    </Link>
  );
};

export default Button;
