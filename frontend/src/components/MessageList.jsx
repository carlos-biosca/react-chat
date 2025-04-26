const MessageList = ({ messageList, user }) => {
  return (
    <ul className="list">
      {messageList.map((msg, index) => (
        <li
          key={index}
          className={`message ${msg.user === user && "message__user"}`}
        >
          <span>{msg.user}</span> <span>{msg.message}</span>
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
