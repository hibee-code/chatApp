import { useState } from "react";

import Login from "./Login";
import Chat from "./Chat";

import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!username || !room) return;

    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
        <Chat username={username} room={room} />
      ) : (
        <Login 
          username={username} 
          room={room} 
          onSubmit={onSubmit} 
          setUsername={setUsername}
          setRoom={setRoom} />
      )}
    </>
  );
};

export default App;
