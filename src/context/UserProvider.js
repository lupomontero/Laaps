import React from "react";
import { auth, db, firebase } from "../firebase.js";

export const UserContext = React.createContext();

const UserProvider = (props) => {
  const DataUser = {
    email: null,
    uid: null,
    activo: null,
  };

  const [usuario, setUser] = React.useState(DataUser);

  const LogIn = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const res = await auth.signInWithPopup(provider);
      const existe = await db.collection("users").doc(res.user.email).get();

      if (!existe.exists) {
        await db.collection("users").doc(res.user.email).set({
          uid: res.user.uid,
          email: res.user.email,
          rol: "invitado",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeSesion = () => {
    auth.signOut();
  };

  return (
    <UserContext.Provider value={{ usuario, LogIn, closeSesion }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
