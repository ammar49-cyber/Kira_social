import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import Reels from "./pages/Reels";
import LongVideo from "./pages/LongVideo";
import { requestPermission, onMessageListener } from "./firebase";

export default function App() {
  useEffect(()=>{
    requestPermission().then(token => console.log("FCM token:", token));
    onMessageListener().then(payload=>alert(payload.notification.title));
  },[]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/longvideo/:id" element={<LongVideo />} />
      </Routes>
    </Router>
  );
}

