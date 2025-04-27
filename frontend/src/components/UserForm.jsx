/*
 * The UserForm component renders a form for the user to enter a username and
 * join the chat room.
 *
 * Props:
 * - setUsername: a function to update the username state.
 * - username: the username of the current user.
 */

const UserForm = ({ setUsername, username }) => {
  const handleChangeUsername = e => {
    setUsername(username => ({ ...username, name: e.target.value }));
  };

  const handleSubmitUsername = e => {
    e.preventDefault();
    setUsername(username => ({ ...username, joined: true }));
  };

  return (
    <form onSubmit={handleSubmitUsername} className="form">
      <input
        type="text"
        placeholder="Enter your username"
        value={username.name}
        onChange={handleChangeUsername}
        className="input"
      />
      <button className="button">Join</button>
    </form>
  );
};

export default UserForm;
