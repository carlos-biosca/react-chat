import { useState, useEffect } from "react";
import "./App.css";
import io from "socket.io-client";

const socket = io("/");

function App() {
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    socket.on("message", msg => {
      console.log(msg);
    });
  }, []);

  const handleChangeMessage = e => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    socket.emit("message", newMessage);
    setNewMessage("");
  };

  return (
    <>
      <h1>Chat React</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Send a message"
          value={newMessage}
          onChange={handleChangeMessage}
        />
        <button>Send</button>
      </form>
    </>
  );
}

export default App;
