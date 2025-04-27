/*
 * MessageForm component renders a form that allows the user to send messages.
 * It manages the state of the new message input and handles message submission.
 * On form submission, it emits the message to the server via a socket event
 * and updates the message list state.
 *
 * Props:
 * - user: the username of the current user.
 * - socket: the socket instance for emitting events.
 * - setMessageList: function to update the list of messages.
 */

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
    <form onSubmit={handleSubmitMessage} className="form">
      <input
        type="text"
        placeholder="Send a message"
        value={newMessage}
        onChange={handleChangeMessage}
        className="input"
      />
      <button className="button">Send</button>
    </form>
  );
};

export default MessageForm;
