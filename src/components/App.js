import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { app } from "../services/firebaseConfig";
import ChatRoom from "./ChatRoom";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import SideBar from "./SideBar.js";

const auth = getAuth(app);

const App = () => {
  const [user] = useAuthState(auth);
  return (
  <div className="AppMami">
    
      <header>
        <h1>ChatFurioso!</h1>
        <SignOut />
      </header>

    <div className="sideEchat">
      <div className='App'>
        <section>{user ? <ChatRoom /> : <SignIn />}</section>
      </div>
    </div>
    </div>
  );
};

export default App;
