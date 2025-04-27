/*
 * The MessageList component renders a list of messages in an unordered list (ul).
 * Each message is displayed as a list item (li) with the user's name and message text.
 * If the message belongs to the current user, it applies a specific CSS class for styling.
 *
 * Props:
 * - user: the username of the current user.
 * - messageList: Array of messages to render.
 */

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
