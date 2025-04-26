import { useState } from "react";

const MessageForm = ({ user, socket, setMessageList }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleChangeMessage = e => {
    setNewMessage(e.target.value);
  };

  const handleSubmitMessage = e => {
    e.preventDefault();
    const msg = {
      user,
      message: newMessage
    };

    socket.emit("message", msg);
    setMessageList(messageList => [...messageList, msg]);
    setNewMessage("");
  };

  return (
    <form onSubmit={handleSubmitMessage}>
      <input
        type="text"
        placeholder="Send a message"
        value={newMessage}
        onChange={handleChangeMessage}
      />
      <button>Send</button>
    </form>
  );
};

export default MessageForm;
