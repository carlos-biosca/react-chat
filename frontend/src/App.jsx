import { useState, useEffect } from "react";
import "./App.css";
import io from "socket.io-client";

const socket = io("/");

function App() {
  const [username, setUsername] = useState({
    name: "",
    joined: false
  });
  const [newMessage, setNewMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.on("message", msg => {
      console.log(msg);
      setMessageList(messageList => [...messageList, msg]);
    });
    return () => {
      socket.off("message");
    };
  }, []);

  const handleChangeMessage = e => {
    setNewMessage(e.target.value);
  };

  const handleSubmitMessage = e => {
    e.preventDefault();
    socket.emit("message", {
      user: username.name,
      message: newMessage
    });
    setMessageList(messageList => [
      ...messageList,
      {
        user: username.name,
        message: newMessage
      }
    ]);
    setNewMessage("");
  };

  const handleChangeUsername = e => {
    setUsername(username => ({ ...username, name: e.target.value }));
  };

  const handleSubmitUsername = e => {
    e.preventDefault();
    setUsername(username => ({ ...username, joined: true }));
  };

  return (
    <>
      <h1>Chat React</h1>
      {username.joined ? (
        <>
          <ul>
            {messageList.map((msg, index) => (
              <li key={index}>
                {msg.user}: {msg.message}
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmitMessage}>
            <input
              type="text"
              placeholder="Send a message"
              value={newMessage}
              onChange={handleChangeMessage}
            />
            <button>Send</button>
          </form>
        </>
      ) : (
        <>
          <h2>Welcome to the chat</h2>
          <form onSubmit={handleSubmitUsername}>
            <input
              type="text"
              placeholder="Enter your username"
              value={username.name}
              onChange={handleChangeUsername}
            />
            <button>Join</button>
          </form>
        </>
      )}
    </>
  );
}

export default App;
