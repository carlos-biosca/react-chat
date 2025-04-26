const MessageList = ({ messageList }) => {
  return (
    <ul>
      {messageList.map((msg, index) => (
        <li key={index}>
          {msg.user}: {msg.message}
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
