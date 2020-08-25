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

  React.useEffect(() => {
    detecUser();
  }, []);

  const detecUser = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("exise", user);
        user.getIdTokenResult().then((idTokenResult) => {
          console.log(idTokenResult);
          if (!!idTokenResult.claims.admin) {
            console.log("Es administrador");
            setUser({
              email: user.email,
              uid: user.uid,
              activo: true,
              rol: "admin",
            });
          } else if (!!idTokenResult.claims.carWash) {
            console.log("Es carWash");
            setUser({
              email: user.email,
              uid: user.uid,
              activo: true,
              rol: "carWash",
            });
          } else {
            console.log("Es cliente");
            setUser({
              email: user.email,
              uid: user.uid,
              activo: true,
              rol: "cliente",
            });
          }
        });
      } else {
        console.log("no existe", user);
        setUser({
          email: null,
          uid: null,
          activo: false,
          rol: null,
        });
      }
    });
  };

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
