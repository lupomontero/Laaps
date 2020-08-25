import React from "react";
import { db, functions } from "../firebase.js";

const Admin = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      await db.collection("users");
    } catch (error) {
      console.log(error);
    }
  };

  return <h1>A qui se vera el entorno de la administracion y empleados</h1>;
};

export default Admin;
