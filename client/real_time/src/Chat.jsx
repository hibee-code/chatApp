import { useEffect } from "react";
import "./index.css";

import { io } from "socket.io-client";

let socket;

// eslint-disable-next-line react/prop-types
const Chat = ({ username, room }) => {
    useEffect(() => {
        socket = io('http://localhost:5000');

        console.log(socket);

        return () => {
            socket.disconnect();
        }
    },[]);

  return (
    <div className="Chat App2">
      <div className="container1">
        <div className="learn">
          <li>Learn {room}</li>
          <p>{username}</p>
        </div>
        <div className="con_inp">
          <p className="peeW" >welcome {username} to the {room}</p>
          <span className="input inp2">admin</span>
        </div>
        <div className="con_inp2">
          <input
            className="input inp3"
            type="text"
            placeholder="Type a message..."
          />
          <span>
            <button className="input inp4" type="submit">
              Send
            </button>
          </span>
        </div>
      </div>
      <div className="container2">
        <div className="p1">
          <p>Realtime Chat Application 💬</p>
          <p>Created with react,Express,Node and socket.io ❤️</p>
          <p>Try it oot right now!</p>
        </div>
        <div className="p2">
          <p>People currentlt chatting:</p>
          <p>javascript mastery</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
