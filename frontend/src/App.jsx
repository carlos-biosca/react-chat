/*
 * The App component manages the state and logic for a real-time chat application using Web Sockets.
 * It maintains the list of messages and the user's username and joined status.
 * When the user is joined, it renders the chat interface including the MessageForm and MessageList components.
 * If the user is not joined, it renders the UserForm for entering a username.
 * The component listens for incoming messages via the socket and updates the message list accordingly.
 */

import { useState, useEffect } from "react";
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
      setMessageList(messageList => [...messageList, msg]);
    });
    return () => {
      socket.off("message");
    };
  }, []);

  return (
    <div className="App">
      {username.joined ? (
        <div className="chat">
          <div className="chat-header">
            <h1 className="title">Chat React</h1>
            <MessageForm
              user={username.name}
              socket={socket}
              setMessageList={setMessageList}
            />
          </div>
          <MessageList messageList={messageList} user={username.name} />
        </div>
      ) : (
        <>
          <h1 className="title">Welcome to the chat</h1>
          <UserForm setUsername={setUsername} username={username} />
        </>
      )}
    </div>
  );
}

export default App;
