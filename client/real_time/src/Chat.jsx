import { useEffect, useState } from "react";
import "./index.css";

import { io } from "socket.io-client";

let socket;

// eslint-disable-next-line react/prop-types
const Chat = ({ username, room }) => {
  const [message, setmessage] = useState("");
    useEffect(() => {
        socket = io('http://localhost:5000');

        console.log(socket);

        return () => {
            socket.disconnect();
        }
    },[]);

    const onSubmit = async (e) => {
      e.preventDefault(); // Prevent default form submission behavior
  
      if (message.trim()) {
        try {
          const res = await fetch("http://localhost:5000/user/message", {
            method: "POST",
            body: JSON.stringify({ username, room, message }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.ok) {
            console.log("Message sent successfully!");
            setmessage(""); // Clear the input field after sending the message
          } else {
            console.error("Failed to send the message");
          }
        } catch (error) {
          console.error("Error sending message:", error);
        }
      } else {
        console.warn("Message is empty. Please type something.");
      }
    };

    return (
      <div className="Chat App2">
        <div className="container1">
          <div className="learn">
            <li>Learn {room}</li>
            <p>{username}</p>
          </div>
          <div className="con_inp">
            <p className="peeW">
              Welcome {username} to the {room}
            </p>
            <span className="input inp2">admin</span>
          </div>
          <div className="con_inp2">
            <form onSubmit={onSubmit}>
              <input
                className="input inp3"
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setmessage(e.target.value)}
              />
              <button className="input inp4" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="container2">
          <div className="p1">
            <p>Realtime Chat Application 💬</p>
            <p>Created with React, Express, Node, and Socket.io ❤️</p>
            <p>Try it out right now!</p>
          </div>
          <div className="p2">
            <p>People currently chatting:</p>
            <p>javascript mastery</p>
          </div>
        </div>
      </div>
    );
  };

export default Chat;
