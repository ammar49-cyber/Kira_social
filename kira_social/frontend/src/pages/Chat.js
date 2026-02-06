import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Chat({ userId, chatWithId }) {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");

  useEffect(()=>{
    socket.emit("addUser", userId);
    socket.on("getMessage", data => {
      setMessages(prev => [...prev, {senderId: data.senderId, text: data.text}]);
    });
  },[userId]);

  const sendMessage = () => {
    socket.emit("sendMessage", {senderId: userId, receiverId: chatWithId, text: newMsg});
    setMessages([...messages, {senderId: userId, text: newMsg}]);
    setNewMsg("");
  };

  return (
    <div style={{padding:20, height:"80vh", overflowY:"scroll"}}>
      {messages.map((msg,i)=>(
        <div key={i} style={{margin:5, textAlign: msg.senderId===userId?"right":"left"}}>
          <span style={{background: msg.senderId===userId?"#6C5CE7":"#00CEC9", color:"white", padding:5, borderRadius:5}}>
            {msg.text}
          </span>
        </div>
      ))}
      <input value={newMsg} onChange={e=>setNewMsg(e.target.value)} placeholder="Type..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
