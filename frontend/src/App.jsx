import { useState, useEffect } from "react";
import "./App.css";
import io from "socket.io-client";

const socket = io("/");

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", msg => {
      setMessage(msg);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  return (
    <>
      <h1>Chat React</h1>
      <p>{message}</p>
    </>
  );
}

export default App;
