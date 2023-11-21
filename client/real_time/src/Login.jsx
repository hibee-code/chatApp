//import "./App.css";


// eslint-disable-next-line react/prop-types
const Login = ({ username, room, onSubmit, setUsername, setRoom }) => {
  return (
    <div className="App">
      <div className="container">
        <div>
          <h2 className="join">Join</h2>
          <hr />
        </div>
        <form className="inp_container" onSubmit={onSubmit}>
          <div>
            <input
              className="input inp1"
              type="text"
              placeholder="JS MASTERY"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              className="input inp2"
              type="text"
              placeholder="Course"
              name="room"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="input inp3" name="sigin">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
