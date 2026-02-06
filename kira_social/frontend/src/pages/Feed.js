import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Feed() {
  const [posts,setPosts]=useState([]);
  const token = localStorage.getItem("token");

  useEffect(()=>{
    fetch("http://localhost:5000/api/videos")
      .then(res=>res.json())
      .then(data=>setPosts(data));
  },[]);

  const handleLike = async id => {
    const res = await fetch(`http://localhost:5000/api/videos/like/${id}`, {
      method:"POST", headers:{Authorization:"Bearer "+token}
    });
    const updated = await res.json();
    setPosts(posts.map(p=>p._id===id?updated:p));
  }

  return (
    <div style={{padding:20}}>
      {posts.map(post=><PostCard key={post._id} post={post} handleLike={handleLike}/>)}
    </div>
  );
}
