import { getAuth } from "firebase/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { app } from "../services/firebaseConfig";

const auth = getAuth(app);

const SignIn = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
    <button className="sign-in" onClick={() => signInWithGoogle()}>
      logar com Google
    </button>
  );
};

export default SignIn;