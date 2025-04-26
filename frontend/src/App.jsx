import { useState, useEffect } from "react";
import "./App.css";
import io from "socket.io-client";

import MessageList from "./components/MessageList";
import MessageForm from "./components/MessageForm";
import UserForm from "./components/UserForm";

const socket = io("/");

function App() {
  const [messageList, setMessageList] = useState([]);
  const [username, setUsername] = useState({
    name: "",
    joined: false
  });

  useEffect(() => {
    socket.on("message", msg => {
      console.log(msg);
      setMessageList(messageList => [...messageList, msg]);
    });
    return () => {
      socket.off("message");
    };
  }, []);

  return (
    <>
      {username.joined ? (
        <>
          <h1>Chat React</h1>
          <MessageList messageList={messageList} />
          <MessageForm
            user={username.name}
            socket={socket}
            setMessageList={setMessageList}
          />
        </>
      ) : (
        <>
          <h1>Welcome to the chat</h1>
          <UserForm setUsername={setUsername} username={username} />
        </>
      )}
    </>
  );
}

export default App;
