import { getAuth } from "firebase/auth";
import { app } from "../services/firebaseConfig";

const auth = getAuth(app);

const SignOut = () => {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sair
      </button>
    )
  );
};

export default SignOut