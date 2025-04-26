const UserForm = ({ setUsername, username }) => {
  const handleChangeUsername = e => {
    setUsername(username => ({ ...username, name: e.target.value }));
  };

  const handleSubmitUsername = e => {
    e.preventDefault();
    setUsername(username => ({ ...username, joined: true }));
  };

  return (
    <form onSubmit={handleSubmitUsername}>
      <input
        type="text"
        placeholder="Enter your username"
        value={username.name}
        onChange={handleChangeUsername}
      />
      <button>Join</button>
    </form>
  );
};

export default UserForm;
