import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

export default function signInApi() {
  return () => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        console.log(payload);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
}
