import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { app, databaseApp } from "../services/firebaseConfig";
import ChatMessage from "./ChatMessage";

const auth = getAuth(app);

const ChatRoom = () => {
  const dummy = useRef();
  const messagesRef = collection(databaseApp, "messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));
  const [messages] = useCollectionData(q, { idField: "id" });

  const [formValue, setFormValue] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    const { photoURL, uid } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      uid,
      photoURL,
      createdAt: serverTimestamp(),
    });
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}
        <div ref={dummy}></div>
      </main>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit" disabled={!formValue}>
          Enviar
        </button>
      </form>
    </>
  );
};

export default ChatRoom;
