import React from "react";
import { db, functions } from "../../firebase.js";

const Admin = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await db.collection("users").get();
      setUsers(res.docs.map((doc) => doc.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>A qui se vera el entorno de la administracion y empleados</h1>

      {users.map((user) => (
        <div key={user.uid}>
          {user.email}-rol{user.rol}
        </div>
      ))}
    </div>
  );
};

export default Admin;
