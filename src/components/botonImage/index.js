import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const BotonImage = ({ adress, image }) => {
  return (
    <Link to={adress}>
      <img src={image} alt="logo" className={styles.btn} />
    </Link>
  );
};

export default BotonImage;
