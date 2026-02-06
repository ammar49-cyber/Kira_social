import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import PostCard from "../components/PostCard";

export default function Feed() {
  const [posts,setPosts] = useState([]);
  const token = "YOUR_JWT_TOKEN";

  useEffect(()=>{
    fetch("http://localhost:5000/api/videos?page=1&limit=10")
      .then(res=>res.json())
      .then(data=>setPosts(data));
  },[]);

  return (
    <ScrollView style={{padding:10}}>
      {posts.map(post=>(
        <PostCard key={post._id} post={post}/>
      ))}
    </ScrollView>
  );
}
